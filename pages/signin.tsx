import { FormEvent, useContext } from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { ButtonWrapper, Input, Main } from '../components';
import useAuth from '../hooks/useAuth';
import useText from '../hooks/useText';

import { UserContext, UserModel } from './_app';

interface ResponseModel {
  success: boolean;
  reason?: string;
  user: UserModel;
}

const SignIn: NextPage = () => {
  const { text: email, setText: setEmail } = useText();
  const { text: password, setText: setPassword } = useText();
  const { setUser } = useContext(UserContext);
  const router = useRouter();

  const signup = () => router.push('/signup');

  useAuth();

  const handleSubmut = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      const { success, reason, user }: ResponseModel = await fetch('/api/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      }).then((response) => response.json());
      if (!success) {
        alert(reason);
      } else {
        alert('로그인에 성공했습니다.');
        setUser(user);
        router.push('/');
      }
    } else {
      alert('잘못된 값이 있습니다.');
    }
  };

  return (
    <Main>
      <form onSubmit={handleSubmut}>
        <Input type="email" onChange={setEmail} placeholder="Email" />
        <Input type="password" onChange={setPassword} placeholder="Password" />
        <ButtonWrapper>
          <button type="submit">로그인</button>
        </ButtonWrapper>
        <span onClick={signup}>회원가입</span>
      </form>
    </Main>
  );
};

export default SignIn;

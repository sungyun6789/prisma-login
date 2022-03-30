import { FormEvent } from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { ButtonWrapper, Input, Main } from '../components';
import useText from '../hooks/useText';

interface ResponseModel {
  success: boolean;
  reason?: string;
}

const SignUp: NextPage = () => {
  const { text: email, setText: setEmail } = useText();
  const { text: password, setText: setPassword } = useText();
  const { text: passwordConfirm, setText: setPasswordConfirm } = useText();
  const router = useRouter();

  const signin = () => router.push('/signin');

  const handleSubmut = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === passwordConfirm) {
      if (email && password) {
        const { success, reason }: ResponseModel = await fetch('/api/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        }).then((response) => response.json());
        if (success) {
          alert('가입이 완료되었습니다.');
          router.push('/signin');
        } else {
          alert(reason);
        }
      } else {
        alert('잘못 입력된 값이 있습니다.');
      }
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <Main>
      <form onSubmit={handleSubmut}>
        <Input type="email" onChange={setEmail} placeholder="Email" />
        <Input type="password" onChange={setPassword} placeholder="Password" />
        <Input type="password" onChange={setPasswordConfirm} placeholder="Password Confirm" />
        <ButtonWrapper>
          <button type="submit">회원가입</button>
        </ButtonWrapper>
        <span onClick={signin}>로그인</span>
      </form>
    </Main>
  );
};

export default SignUp;

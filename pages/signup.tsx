import { FormEvent, useState } from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { ButtonWrapper, Input, Main } from '../components';

const SignIn: NextPage = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordConfirm, setPasswordConfirm] = useState<string>();
  const router = useRouter();

  const signin = () => router.push('/signin');

  const handleSubmut = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === passwordConfirm) {
      console.log({ email, password, passwordConfirm });
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <Main>
      <form onSubmit={handleSubmut}>
        <Input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <Input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <Input type="password" onChange={(e) => setPasswordConfirm(e.target.value)} placeholder="Password Confirm" />
        <ButtonWrapper>
          <button type="submit">회원가입</button>
        </ButtonWrapper>
        <span onClick={signin}>로그인</span>
      </form>
    </Main>
  );
};

export default SignIn;

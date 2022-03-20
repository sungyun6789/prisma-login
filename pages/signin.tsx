import { FormEvent, useState } from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { ButtonWrapper, Input, Main } from '../components';

const SignIn: NextPage = () => {
  const [id, setId] = useState<string>();
  const [password, setPassword] = useState<string>();
  const router = useRouter();

  const signup = () => router.push('/signup');

  const handleSubmut = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ id, password });
  };

  return (
    <Main>
      <form onSubmit={handleSubmut}>
        <Input type="text" onChange={(e) => setId(e.target.value)} placeholder="ID" />
        <Input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <ButtonWrapper>
          <button type="submit">로그인</button>
        </ButtonWrapper>
        <span onClick={signup}>회원가입</span>
      </form>
    </Main>
  );
};

export default SignIn;

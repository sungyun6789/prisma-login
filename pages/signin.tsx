import { FormEvent } from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { ButtonWrapper, Input, Main } from '../components';

const SignIn: NextPage = () => {
  const router = useRouter();

  const signup = () => router.push('/signup');

  const handleSubmut = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Main>
      <form onSubmit={handleSubmut}>
        <Input name="id" type="text" placeholder="ID" />
        <Input name="password" type="password" placeholder="Password" />
        <ButtonWrapper>
          <button type="submit">로그인</button>
        </ButtonWrapper>
        <span onClick={signup}>회원가입</span>
      </form>
    </Main>
  );
};

export default SignIn;

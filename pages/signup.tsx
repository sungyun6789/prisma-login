import { FormEvent } from 'react';

import { NextPage } from 'next';

import { ButtonWrapper, Input, Main } from '../components';

const SignIn: NextPage = () => {
  const handleSubmut = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Main>
      <form onSubmit={handleSubmut}>
        <Input name="id" type="text" placeholder="ID" />
        <Input name="password" type="password" placeholder="Password" />
        <Input name="password" type="password" placeholder="Password Confirm" />
        <ButtonWrapper>
          <button type="submit">회원가입</button>
        </ButtonWrapper>
        <span>로그인</span>
      </form>
    </Main>
  );
};

export default SignIn;

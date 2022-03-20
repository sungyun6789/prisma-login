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
        <ButtonWrapper>
          <button type="submit">로그인</button>
        </ButtonWrapper>
        <span>회원가입</span>
      </form>
    </Main>
  );
};

export default SignIn;

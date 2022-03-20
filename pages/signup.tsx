import { FormEvent } from 'react';

import styled from '@emotion/styled';
import { NextPage } from 'next';

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

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1000px;
  height: 100vh;
  margin: 0 auto;

  span {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    cursor: pointer;
  }
`;

const Input = styled.input`
  display: block;
  width: 300px;
  height: 50px;

  padding: 0 20px;
  margin-bottom: 50px;

  border: 1px solid #f0f0f0;
  border-radius: 10px;

  font-size: 17px;
  &:focus {
    outline: none;
  }
`;

const ButtonWrapper = styled.article`
  display: flex;
  justify-content: center;

  button {
    width: 200px;
    height: 50px;

    color: white;
    background-color: #64b5f6;

    border: none;
    border-radius: 10px;

    font-size: 17px;

    transition: 0.3s;
    :hover {
      background-color: #2196f3;
    }
    cursor: pointer;
  }
`;

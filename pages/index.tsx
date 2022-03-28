import { useContext } from 'react';

import styled from '@emotion/styled';
import { NextPage } from 'next';

import { UserContext } from './_app';

const Index: NextPage = () => {
  const { user, setUser } = useContext(UserContext);
  const logout = async () => {
    await fetch('/api/signout', { method: 'POST' });
    setUser(undefined);
  };

  return (
    <Main>
      <div>
        <h1>안녕하세요. {user?.email}</h1>
        <LogoutButton onClick={logout}>로그아웃</LogoutButton>
      </div>
    </Main>
  );
};

export default Index;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    text-align: center;
    font-size: 30px;
    margin-bottom: 70px;
  }
`;

const LogoutButton = styled.button`
  display: block;
  width: 300px;
  height: 50px;

  border: 1px solid #e0e0e0;
  border-radius: 10px;

  background-color: white;

  font-size: 16px;
  cursor: pointer;
`;

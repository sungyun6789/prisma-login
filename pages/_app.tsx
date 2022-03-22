import { createContext, useState } from 'react';

import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global.style';

export interface UserModel {
  id: number;
  email: string;
}

interface ContextModel {
  user?: UserModel;
  setUser: (props?: UserModel) => void;
}

export const UserContext = createContext<ContextModel>({ user: undefined, setUser: () => undefined });

const app = ({ Component, pageProps }: AppProps) => {
  const [userInfo, setUserInfo] = useState<UserModel>();

  return (
    <UserContext.Provider value={{ user: userInfo, setUser: setUserInfo }}>
      <GlobalStyle />
      <Component {...pageProps} />
    </UserContext.Provider>
  );
};

export default app;

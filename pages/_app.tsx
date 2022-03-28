import { createContext, useEffect, useState } from 'react';

import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  useEffect(() => {
    userInfo ? router.push('/') : router.push('/signin');
  }, [userInfo]);

  return (
    <UserContext.Provider value={{ user: userInfo, setUser: setUserInfo }}>
      <GlobalStyle />
      <Component {...pageProps} />
    </UserContext.Provider>
  );
};

export default app;

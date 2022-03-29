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
  const [user, setUser] = useState<UserModel>();
  const router = useRouter();

  useEffect(() => {
    user ? router.push('/') : router.push('/signin');
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <GlobalStyle />
      <Component {...pageProps} />
    </UserContext.Provider>
  );
};

export default app;

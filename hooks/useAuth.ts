import { useContext, useEffect } from 'react';

import { useRouter } from 'next/router';

import { UserContext } from '../pages/_app';

const useAuth = () => {
  const { setUser } = useContext(UserContext);

  const router = useRouter();

  const getIsLoginUser = async () => {
    const { success, user } = await fetch('/api/auth', { method: 'GET' }).then((response) => response.json());
    success && user ? setUser(user) : router.push('/signin');
  };

  useEffect(() => {
    getIsLoginUser();
  }, []);
};

export default useAuth;

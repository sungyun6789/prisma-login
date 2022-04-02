import { useContext, useEffect } from 'react';

import { useRouter } from 'next/router';

import { UserContext } from '../pages/_app';

const useAuth = () => {
  const { setUser } = useContext(UserContext);

  const router = useRouter();

  const getIsLoginUser = async () => {
    try {
      const { success, user } = await fetch('/api/auth', { method: 'GET' }).then((response) => response.json());
      success ? setUser(user) : router.push('/signin');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getIsLoginUser();
  }, []);
};

export default useAuth;

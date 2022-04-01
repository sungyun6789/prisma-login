import { useContext, useEffect } from 'react';

import { useRouter } from 'next/router';

import { UserContext } from '../pages/_app';

const useAuth = () => {
  const { setUser } = useContext(UserContext);

  const router = useRouter();

  const getIsLoginUser = async () => {
    try {
      const data = await fetch('/api/auth').then((response) => response.json());
      data.success ? setUser(data.user) : router.push('/signin');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getIsLoginUser();
  }, []);
};

export default useAuth;

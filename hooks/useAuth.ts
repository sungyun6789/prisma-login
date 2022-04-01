import { useContext, useEffect } from 'react';

import { useRouter } from 'next/router';

import { UserContext } from '../pages/_app';

const useAuth = () => {
  const { setUser } = useContext(UserContext);

  const router = useRouter();

  const getIsLoginUser = async () => {
    await fetch('/api/auth')
      .then((response) => response.json())
      .then((data) => console.log(data));
    // data.success ? setUser(data.user) : router.push('/signin');
  };

  useEffect(() => {
    getIsLoginUser();
  }, []);
};

export default useAuth;

import { useContext, useEffect } from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { UserContext } from './_app';

const Index: NextPage = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    user ?? router.push('/signin');
  }, []);

  return <>Home</>;
};

export default Index;

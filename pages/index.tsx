import { useEffect } from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Index: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/signin');
  }, []);

  return <>Home</>;
};

export default Index;

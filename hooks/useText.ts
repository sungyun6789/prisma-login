import { ChangeEvent, useState } from 'react';

const useText = () => {
  const [t, setT] = useState<string>();

  const setText = (e: ChangeEvent<HTMLInputElement>) => setT(e.target.value);

  return { text: t, setText };
};

export default useText;

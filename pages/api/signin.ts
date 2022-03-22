import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../utils/prisma';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return res.status(400).json({ success: false, reason: '이메일이 존재하지 않습니다.' });
  }

  if (user.password !== password) {
    return res.status(400).json({ success: false, reason: '비밀번호가 일치하지 않습니다.' });
  } else {
    const { id, email } = user;
    return res.json({ success: true, user: { id, email } });
  }
}

export default handler;

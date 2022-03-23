import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../utils/prisma';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  const isEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!isEmail) {
    await prisma.user.create({
      data: {
        email,
        password: await bcrypt.hash(password, 12),
      },
    });
    return res.json({ success: true });
  } else {
    return res.status(400).json({ success: false, reason: '이미 존재하는 이메일입니다.' });
  }
}

export default handler;

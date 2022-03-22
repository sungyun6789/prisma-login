import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../utils/prisma';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  if (email && password) {
    await prisma.user.create({
      data: {
        email,
        password,
      },
    });
  }

  return res.json({ success: true });
}

export default handler;

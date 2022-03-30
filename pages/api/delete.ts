import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../utils/prisma';
import { withSession } from '../../utils/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;

  await prisma.user.delete({
    where: {
      id,
    },
  });

  req.session.destroy();

  return res.json({ success: true });
}

export default withSession(handler);

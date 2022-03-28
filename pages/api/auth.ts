import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../utils/prisma';
import { withSession } from '../../utils/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.session.user?.id) {
    const user = await prisma.user.findUnique({
      where: {
        email: req.session.user?.id.toString(),
      },
    });
    return res.json({ success: true, user: { id: user?.id, email: user?.email } });
  }

  return res.json({ success: false });
}

export default withSession(handler);

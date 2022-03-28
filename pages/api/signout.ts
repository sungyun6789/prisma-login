import { NextApiRequest, NextApiResponse } from 'next';

import { withSession } from '../../utils/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  req.session.destroy();

  return res.json({ success: true });
}

export default withSession(handler);

import { IronSessionOptions } from 'iron-session';
import { withIronSessionApiRoute } from 'iron-session/next';
import type { NextApiHandler } from 'next/types';

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

const cookieOptions: IronSessionOptions = {
  cookieName: 'login',
  password: process.env.COOKIE_PASSWORD!,
};

export const withSession = (fn: NextApiHandler) => withIronSessionApiRoute(fn, cookieOptions);

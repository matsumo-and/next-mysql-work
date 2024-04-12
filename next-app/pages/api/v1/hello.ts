// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/infrastructure/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const user = await prisma.user.findFirst();
  res.status(200).json({ name: user?.name ?? 'John Doe' });
}

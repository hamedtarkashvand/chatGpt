// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { query } from 'firebase/firestore';
import { adminDb } from '@/firebaseAdmin';
import query from '@/lib/queryApi';
import admin from 'firebase-admin';

import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model} = req.body;

  if (!prompt) {
    res.status(400).json({ answer: 'please provide a prompt' });
  }

  if (!chatId) {
    res.status(400).json({ answer: 'please provide a valid chat id'});
  }

  try {
    const response = await query(prompt, chatId, model);
      
       res
         .status(200)
         .json({
           answer:
             response || 'Chat Gpt was unable to find an answer for that!',
         });
      
  } catch(err) {
    res.status(500).json({answer: 'errore jojo'});
  }
}

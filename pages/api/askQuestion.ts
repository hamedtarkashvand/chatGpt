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
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: 'please provide a prompt' });
  }

  if (!chatId) {
    res.status(400).json({ answer: 'please provide a valid chat id' });
  }

  try {
    const response = await query(prompt, chatId, model);
    const message: Message = {
      text: response || 'Chat Gpt was unable to find an answer for that!',
      createdAt: admin.firestore.Timestamp.now(),
      user: {
        _id: 'Chat Gpt',
        name: 'Chat Gpt',
        avatar: '/static/logo.png',
      },
    };
cons         
    await adminDb
      .collection('users')
      .doc(session?.user?.email)
      .collection('chats')
      .doc(chatId)
      .collection('messages')
      .add(message)
      .then(() => {
        res.status(200).json({ answer: message.text });
      })
      .catch((err) => {
        res.status(500).json({ answer: err });
      });
  } catch (err) {
    res.status(500).json({ answer: 'errore jojo' });
  }
}

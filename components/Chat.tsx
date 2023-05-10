'use client';
import { dbFirebase } from '@/firebase';
import { collection, orderBy, query } from 'firebase/firestore';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import Message from './Message';
interface iPropsChat {
  chatId: string;
}
const Chat: NextPage<iPropsChat> = ({ chatId }) => {
  const { data: session } = useSession();
  const [messages] = useCollection(
    session &&
      query(
        collection(
          dbFirebase,
          'users',
          session?.user?.email!,
          'chats',
          chatId,
          'messages'
        ),
        orderBy('createdAt', 'asc')
      )
  );

  return (
    <div className='flex-1 flex-col space-y-3 p-4 overflow-y-auto'>
      {messages?.docs?.map((message) => {
        return (
            <Message key={message.id} message={message.data()} />
        );
      })}
    </div>
  );
};

export default Chat;

'use client';
import { dbFirebase } from '@/firebase';
import { collection, orderBy, query } from 'firebase/firestore';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import Message from './Message';
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef } from 'react';
interface iPropsChat {
  chatId: string;
}
const Chat: NextPage<iPropsChat> = ({ chatId }) => {
  const { data: session } = useSession();
      const messagesEndRef = useRef(null);

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


    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
      scrollToBottom();
    }, [messages]);

  return (
    <div className='flex-1 flex-col space-y-3 overflow-y-auto p-4'>
      {messages?.empty && (
        <>
          <p className='mt-10 text-center text-white'>
            Type a prompt in below to get started
          </p>
          <ArrowDownCircleIcon className='mx-auto mt-5 h-10 w-10 animate-bounce text-white' />
        </>
      )}
      {messages?.docs?.map((message) => {
        return (
          <Message
            key={message.id}
            message={message.data()}
          />
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Chat;

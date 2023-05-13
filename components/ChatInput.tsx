'use client';
import { dbFirebase } from '@/firebase';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { FormEvent, useEffect, useState } from 'react';
import useSWR from 'swr';
import ModelSelection from './ModelSelection';

type propsType = {
  chatId: string;
};

const ChatInput: NextPage<propsType> = ({ chatId }) => {
  const { data: session } = useSession();
  const [prompt, setPrompt] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { data: model } = useSWR('model', {
    fallbackData: 'text-davinci-003',
  });

  // const model = 'text-davinci-003';

  const handlerSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const notfication = toast.loading('ChatGpt is thinking...');

    if (!prompt) return;

    const input = prompt.trim();
    setPrompt('');

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image!,
      },
    };

    await addDoc(
      collection(
        dbFirebase,
        'users',
        session?.user?.email!,
        'chats',
        chatId,
        'messages'
      ),
      message
    );

    try {
      await fetch('/api/askQuestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: input,
          chatId,
          model,
          session,
        }),
      }).then(() => {
        toast.success('Ai has responded', {
          id: notfication,
        });
        setLoading(false);
      });
    } catch (err) {
      toast.success('Ai err', {
        id: notfication,
      });
      setLoading(false);
    }
  };

  return (
    <div className=' bg-gray-700/50 text-sm text-gray-400'>
      <form
        action=''
        onSubmit={handlerSendMessage}
        className='flex space-x-5 p-5'>
        <input
          dir='auto'
          onChange={(e) => setPrompt(e.target.value)}
          type='text'
          disabled={!session || loading}
          value={prompt}
          className={`flex-1  bg-transparent focus:outline-none disabled:cursor-not-allowed disabled:text-gray-300 `}
          placeholder=' type your message here...'
        />

        <button
          type='submit'
          disabled={!session || !prompt || loading}
          className='rounded bg-[#11A37F] px-4 py-2 font-bold text-white hover:opacity-50 disabled:cursor-not-allowed'>
          <PaperAirplaneIcon className='h-4 w-4 -rotate-45' />
        </button>
      </form>
      <div className='md:hidden'>
        <ModelSelection />
      </div>
    </div>
  );
};

export default ChatInput;

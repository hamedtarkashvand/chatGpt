'use client';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import type { NextComponentType, NextPageContext } from 'next';
import ModelSelection from './ModelSelection';
import { FormEvent, useContext, useId, useState } from 'react';
import useSWR from 'swr';
import { toast } from 'react-hot-toast';
import { questionContext } from '@/app/context/question/QuestionProvider';
import { askQuestionsAction } from '@/app/context/question/action';

interface Props {}

const QuestionInput: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const [prompt, setPrompt] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const {dispatch: setChats } = useContext(questionContext);
  const ClientId = useId();
  const ServerId = useId();


  const { data: model } = useSWR('model', {
    fallbackData: 'text-davinci-003',
  });

  const handlerSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const notfication =
      toast.loading('ChatGpt is thinking...');
    
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt('');

    setChats(
      askQuestionsAction({
        text: input,
        user: {
          _id: `${ClientId}_${new Date().getTime()}`,
          name: 'client',
          avatar: '/static/client.png',
        },
      })
    );

    try {
      const response = await fetch('/api/askQuestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model,
          prompt: input,
          chatId: ServerId,
        }),
      });

      const { answer } = await response.json();

      setChats(
        askQuestionsAction({
          text: answer,
          user: {
            _id: `${ServerId}_${new Date().getTime()}`,
            name: 'chatGpt',
            avatar: '/static/logo.png',
          },
        })
      );

      toast.success('Ai has responded', {
        id: notfication,
      });
      setLoading(false);
    } catch (err) {
      toast.error('Ai err', {
        id: notfication,
      });
      setLoading(false);
    }
  };

  return (
    <div className='w-full rounded-md  bg-gray-700/50 text-sm text-gray-400 focus:bg-red-300  shadow-md md:w-2/4'>
      <form
        // onFocus={()}
        action=''
        onSubmit={handlerSendMessage}
        className='flex space-x-5 p-5'>
        <input
          dir='auto'
          onChange={(e) => setPrompt(e.target.value)}
          type='text'
          disabled={loading}
          value={prompt}
          className={`flex-1  bg-transparent focus:outline-none disabled:cursor-not-allowed disabled:text-gray-300 `}
          placeholder=' type your questions here...'
        />

        <button
          type='submit'
          // disabled={!prompt || loading}
          className='rounded bg-[#11A37F] px-4 py-2 font-bold text-white hover:opacity-50 disabled:cursor-not-allowed'>
          <PaperAirplaneIcon className='h-4 w-4 -rotate-45' />
        </button>
      </form>
      <div className='md:hidden'>{/* <ModelSelection /> */}</div>
    </div>
  );
};

export default QuestionInput;

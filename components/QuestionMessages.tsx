'use client';
import type { NextPage } from 'next';
import { useContext, useEffect, useRef , useLayoutEffect} from 'react';
import { questionContext } from '@/app/context/question/QuestionProvider';
import Message from './Message';
import SectionAbout from './SectionAbout';

const QuestionMessages: NextPage = () => {
  const { state: chats } = useContext(questionContext);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  if (!chats.length) return <SectionAbout />;

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useLayoutEffect(() => {
    scrollToBottom();
  }, [chats.length]);

  return (
    <>
      <div
        onClick={scrollToBottom}
        className='mb-6 w-full flex-1 space-y-3 overflow-y-auto p-4  md:max-h-96 md:w-2/4 md:flex-none md:flex-col '>
        {chats?.map((message) => {
          return (
            <Message
              key={message.user._id}
              message={message}
            />
          );
        })}
        <div ref={messagesEndRef} />
      </div>
    </>
  );
};

export default QuestionMessages;

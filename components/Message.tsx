'use client';
import type { NextPage } from 'next';
import { DocumentData } from 'firebase/firestore';
import { isRTL } from '@/utils';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
type TProps = {
  message: DocumentData;
};

const Message: NextPage<TProps> = ({ message }) => {
  const {
    user: { avatar, name, _id },
    text,
  } = message;
  const isChatGpt = name == 'Chat Gpt';

  return (
    <div
      className={`mx-auto flex  space-x-2 rounded-lg bg-[#202123] p-2 ${
        isChatGpt && 'bg-[#434654]'
      }`}>
      <img
        className='sticky top-1 h-10 w-10 rounded-full object-cover'
        src={avatar}
        alt='avatar'
      />
      <div className={`flex flex-1 flex-col ${isRTL(text) && 'rtl'}`}>
        <p className='text-sm text-white/70'>{name}</p>
        <ReactMarkdown
          className={`message__markdown `}
          children={text}
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || 'language-js');

              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  // @ts-ignore
                  style={atomDark}
                  className='p-3'
                  language={match[1]}
                  PreTag='div'
                  {...props}
                />
              ) : (
                <code
                  className={`${className} w-full rounded-sm text-orange-300`}
                  {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
        {/* <div className='w-full rounded-sm text-white'>{text}</div> */}
      </div>
    </div>
  );
};

export default Message;

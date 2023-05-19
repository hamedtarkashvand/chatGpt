import type { ReactNode } from 'react';
import '@/styles/globals.css';
import QuestionProvider from './context/question/QuestionProvider';
import ClientProvider from '@/components/ClientProvider';
export const metadata = {
  title: 'Chat Gpt messanger',
  description: 'tarining next Js',
  viewport:
    'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
  themeColor: '#202123',
};

type PropsType = {
  children: ReactNode;
};

export default async function RootLayout({ children }: PropsType) {
  return (
    <html lang='en'>
      <body>
        <div className='h-screen overflow-hidden '>
          <QuestionProvider>
            <div className='overflow-hidden h-screen bg-[#343541]'>{children}</div>
            <ClientProvider />
          </QuestionProvider>
        </div>
      </body>
    </html>
  );
}

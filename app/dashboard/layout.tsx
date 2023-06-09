import { SessionProvider } from '@/components/SessionProvider ';
import { getServerSession } from 'next-auth/next';
import type { ReactNode } from 'react';

import SideBar from '@/components/SideBar';
import Login from '@/components/Login';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
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
  const session = await getServerSession(authOptions);
  return (
        <div className='h-screen overflow-hidden'>
          <SessionProvider session={session}>
            {!session ? (
              <Login />
            ) : (
              <div className='flex'>
                <div className='h-screen max-w-xs overflow-y-auto bg-[#202123] md:min-w-[20rem] '>
                  <SideBar />
                </div>

                <ClientProvider />

                <div className='flex-1 bg-[#343541]'>{children}</div>
              </div>
            )}
          </SessionProvider>
        </div>
  );
}

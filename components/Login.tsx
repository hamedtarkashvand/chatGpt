'use client';
import Image from 'next/image';
import type { FC } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  return (
    <div>
      <div className='flex h-screen flex-col items-center justify-center  bg-[#11A37f]'>
        <Image
          
          src='/static/logo.png'
          width={300}
          height={300}
          alt='logo'
        />
        <button
          className='animate-pulse text-3xl font-bold text-white'
          onClick={() => signIn('google')}>
          Sign up to ChatGPT
        </button>

      </div>
    </div>
  );
};
export default Login;

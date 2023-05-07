'use client'
import Image from 'next/image';
import type { FC } from 'react';
import {signIn} from 'next-auth/react';


interface LoginProps {}

const Login: FC<LoginProps> = ({ }) => {
        
  return (
    <div className='flex min-h-screen flex-col items-center justify-center  bg-[#11A37f]'>
      <Image
        src='/static/logo.png'
        width={300}
        height={300}
        alt='logo'
      />
      <button
        className='animate-pulse text-3xl font-bold text-white'
        onClick={() => signIn('google')}>
        Sign In to ChatGPT
      </button>
    </div>
  );
};
export default Login;

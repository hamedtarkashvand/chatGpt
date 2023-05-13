'use client';
import Image from 'next/image';
import type { FC } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  return (
    <div>
      <div className='flex min-h-screen flex-col items-center justify-center  bg-[#11A37f]'>
        <Image
          className='mt-auto'
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

        <Link
          href={'https://www.linkedin.com/in/hamedtorkashvand/'}
          target='_blank'
          className='mb-2 mt-auto flex items-center overflow-hidden rounded-md bg-white  pr-2 text-sm capitalize text-slate-500'>
          <Image
            className='mr-1'
            width='40'
            height='40'
            src='/static/imageProfile.png'
            alt='pic autor'
          />
          <div className='flex flex-col justify-start '>
            <p className=''>hamed torkashvand</p>
            <p className='text-[12px] text-slate-400'>frontend engineer</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Login;

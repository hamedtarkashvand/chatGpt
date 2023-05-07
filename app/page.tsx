import { Inter } from 'next/font/google';
import { BoltIcon, ExclamationCircleIcon, SunIcon } from '@heroicons/react/24/outline';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {    
  return (
    <main className='flex h-screen overflow-y-auto flex-col items-center justify-center px-2 text-white'>
      <h1 className='mb-20 text-5xl font-bold capitalize'>chatGPT</h1>
      <section className='flex flex-wrap items-center justify-center  space-x-2'>
        <section className='m-2'>
          <div className='mb-5 flex flex-col items-center justify-center '>
            <SunIcon className='h-8 w-8' />
            <h2>Exmpales</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText capitalize'>"explain somthing to me"</p>
            <p className='infoText capitalize'>
              "what is differece between a dog and cat ?"
            </p>
            <p className='infoText capitalize'>
              "what is the color of the sun ?"
            </p>
          </div>
        </section>
        <section className='m-2'>
          <div className='mb-5 flex flex-col items-center justify-center '>
            <BoltIcon className='h-8 w-8' />
            <h2>Exmpales</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText capitalize'>"explain somthing to me"</p>
            <p className='infoText capitalize'>
              "what is differece between a dog and cat ?"
            </p>
            <p className='infoText capitalize'>
              "what is the color of the sun ?"
            </p>
          </div>
        </section>
        <section className='m-2'>
          <div className='mb-5 flex flex-col items-center justify-center '>
            <ExclamationCircleIcon className='h-8 w-8' />
            <h2>Exmpales</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText capitalize'>"explain somthing to me"</p>
            <p className='infoText capitalize'>
              "what is differece between a dog and cat ?"
            </p>
            <p className='infoText capitalize'>
              "what is the color of the sun ?"
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

import {
  BoltIcon,
  ExclamationCircleIcon,
  SunIcon,
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center overflow-hidden overflow-y-auto px-2 text-white md:justify-center'>
      <h1 className='my-0 text-xl font-bold capitalize md:my-20  md:text-5xl'>
        chatGPT  
      </h1>
      <section className='flex flex-wrap items-center justify-center space-x-2'>
        <section className='m-2'>
          <div className='mb-5 flex flex-col items-center justify-center '>
            <SunIcon className='h-8 w-8' />
            <h2>Exmpales</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText capitalize'>
              "Explain quantum computing in simple terms "
            </p>
            <p className='infoText capitalize'>
              "Got any creative ideas for a 10 year old’s birthday ?"
            </p>
            <p className='infoText capitalize'>
              "How do I make an HTTP request in Javascript?"
            </p>
          </div>
        </section>
        <section className='m-2'>
          <div className='mb-5 flex flex-col items-center justify-center '>
            <BoltIcon className='h-8 w-8' />
            <h2>Capabilities</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText capitalize'>
              Remembers what user said earlier in the conversation
            </p>
            <p className='infoText capitalize'>
              Allows user to provide follow-up corrections
            </p>
            <p className='infoText capitalize'>
              Trained to decline inappropriate requests
            </p>
          </div>
        </section>
        <section className='m-2'>
          <div className='mb-5 flex flex-col items-center justify-center'>
            <ExclamationCircleIcon className='h-8 w-8' />
            <h2>Limitations</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText capitalize'>
              May occasionally generate incorrect information
            </p>
            <p className='infoText capitalize'>
              May occasionally produce harmful instructions or biased content
            </p>
            <p className='infoText capitalize'>
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

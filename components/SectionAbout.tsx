import type { NextComponentType, NextPageContext } from 'next';
import {
  BoltIcon,
  ExclamationCircleIcon,
  SunIcon,
} from '@heroicons/react/24/outline';

interface Props {}

const SectionAbout: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <section className='mt-6  flex flex-grow flex-wrap items-center justify-center space-x-2 overflow-y-auto md:flex md:flex-grow-0'>
      <section className='m-2'>
        <div className='mb-5 flex flex-col items-center justify-center '>
          <SunIcon className='h-8 w-8 text-[#11A37F]' />
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
          <BoltIcon className='h-8 w-8  text-[#11A37F]' />
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
          <ExclamationCircleIcon className='h-8 w-8  text-[#11A37F]' />
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
  );
};

export default SectionAbout;

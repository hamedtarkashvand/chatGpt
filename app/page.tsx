import QuestionInput from '@/components/QuestionInput';
import SectionAbout from '@/components/SectionAbout';
import WrapperMessages from '@/components/WrapperMessages';
// import SectionAbout from '@/components/SectionAbout';
// import { questionContext } from './context/question/QuestionProvider';
// import { useContext } from 'react';

export default function Home() {
  // const { state: chats } = useContext(questionContext);
  return (
    <main className='flex h-screen flex-col items-center justify-center p-5'>
      {/* <WrapperMessages /> */}
      <SectionAbout />
      <QuestionInput />
    </main>
  );
}

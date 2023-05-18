import QuestionInput from '@/components/QuestionInput';
import QuestionMessages from '@/components/QuestionMessages';
// import SectionAbout from '@/components/SectionAbout';
// import { questionContext } from './context/question/QuestionProvider';
// import { useContext } from 'react';

export default function Home() {
  // const { state: chats } = useContext(questionContext);
  return (
    <main className='flex flex-col items-center h-screen justify-center p-5'>
        <QuestionMessages />
        <QuestionInput />
    </main>
  );
}

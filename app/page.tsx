import QuestionInput from '@/components/QuestionInput';
import WrapperAboutAndMessages from '@/components/WrapperAboutAndMessages';
export default function Home() {
  return (
    <main className='flex  h-screen max-h-screen min-h-full flex-col items-center justify-center overflow-hidden p-5'>
      <WrapperAboutAndMessages />
      <QuestionInput />
    </main>
  );
}

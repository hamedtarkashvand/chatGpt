import QuestionInput from '@/components/QuestionInput';
import WrapperAboutAndMessages from '@/components/WrapperAboutAndMessages';
export default function Home() {
  return (
    <main className='flex min-h-full max-h-screen flex-col items-center justify-center p-5'>
      <WrapperAboutAndMessages />
      <QuestionInput />
    </main>
  );
}

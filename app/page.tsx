import QuestionInput from '@/components/QuestionInput';
import WrapperAboutAndMessages from '@/components/WrapperAboutAndMessages';
export default function Home() {
  return (
    <main className='h-hamed flex min-h-full flex-col items-center justify-center  md:p-5'>
      <WrapperAboutAndMessages />
      <QuestionInput />
    </main>
  );
}

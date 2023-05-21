import QuestionInput from '@/components/QuestionInput';
import WrapperAboutAndMessages from '@/components/WrapperAboutAndMessages';
export default function Home() {
  return (
    <main className='h-hamed flex min-h-full flex-col items-center m-auto justify-center md:w-3/4  md:p-5'>
      <WrapperAboutAndMessages />
      <QuestionInput />
    </main>
  );
}

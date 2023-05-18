'use client';
import { questionContext } from '@/app/context/question/QuestionProvider';
import SectionAbout from '@/components/SectionAbout';
import WrapperMessages from '@/components/WrapperMessages';
import { useContext } from 'react';

export default function WrapperAboutAndMessages() {
  const { state: chats } = useContext(questionContext);
  return <>{!!chats.length ? <WrapperMessages /> : <SectionAbout />}</>;
}

import type { NextPage } from 'next';
import { DocumentData } from 'firebase/firestore';
import { isRTL } from '@/utils';
type TProps = {
  message: DocumentData;
};

const Message: NextPage<TProps> = ({ message }) => {
  const {
    user: { avatar, name, _id },
    text,
  } = message;
 const isChatGpt = name == 'Chat Gpt';
 
  return (
    <div className={`flex space-x-2 rounded-lg bg-[#202123] p-2 ${isChatGpt && 'bg-[#434654]'}`}>
      <img
        className='sticky h-10 w-10 rounded-full top-1'
        src={avatar}
        alt='avatar'
      />
      <div className={`flex flex-1 flex-col ${isRTL(text) && 'rtl'}`}>
        <p className='text-sm text-white/70'>{name}</p>
        <div className='w-full rounded-sm text-white'>{text}</div>
      </div>
    </div>
  );
};

export default Message;

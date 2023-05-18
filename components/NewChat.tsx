import { dbFirebase } from '@/firebase';
import { PlusIcon } from '@heroicons/react/24/outline';
import { addDoc, collection , serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import type { FC } from 'react';

interface NewChatProps {}

const NewChat: FC<NewChatProps> = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(dbFirebase, 'users', session?.user?.email!, 'chats'),
      {
        messages: [],
        userId: session?.user?.email!,
        createdAt: serverTimestamp()
      }
    );
    router.push(`/dashboard/chat/${doc.id}`);
  }
  return (
    <div
      onClick={() => createNewChat()}
      className='chatRow rounded-md border border-gray-700'>
      <PlusIcon className='h-4 w-4' />
      <p>New chat</p>
    </div>
  );
};
export default NewChat;

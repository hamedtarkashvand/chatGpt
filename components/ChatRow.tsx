import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import { dbFirebase } from '@/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline';

type propsType = {
  id: string;
  skeleton?: boolean;
};

const ChatRow: NextPage<propsType> = ({ id, skeleton }) => {
  const [active, setActive] = useState<boolean>(false);
  const { data: session } = useSession();
  const path = usePathname();
  const route = useRouter();

  const [messages, loading] = useCollection(
    session &&
      query(
        collection(
          dbFirebase,
          'users',
          session?.user?.email!,
          'chats',
          id,
          'messages'
        ),
        orderBy('createdAt', 'asc')
      )
  );

  const removeChat = async (id: string) => {
    await deleteDoc(
      doc(dbFirebase, 'users', session?.user?.email!, 'chats', id)
    );
    route?.replace('/');
  };

  useEffect(() => {
    if (!path) return;

    setActive(path.includes(id));
  }, [path, messages]);

  if (loading || skeleton) {
    return (
      <div className='chatRow animate-pulse cursor-default rounded-md bg-gray-600 '>
        loading...
      </div>
    );
  }

  return (
    <>
      <Link
        href={`/chat/${id}`}
        className={`chatRow justify-center overflow-hidden rounded-lg ${
          active && 'bg-gray-700/70'
        }`}>
        <ChatBubbleLeftIcon className='h-5 w-5' />
        <p className='hidden w-2 flex-1 truncate text-center md:inline-flex'>
          {messages?.docs[messages?.docs.length - 1]?.data().text || 'New Chat'}
        </p>
        <TrashIcon
          onClick={() => removeChat(id)}
          className='h-5 w-5 text-gray-700 hover:text-red-700'
        />
      </Link>
    </>
  );
};

export default ChatRow;

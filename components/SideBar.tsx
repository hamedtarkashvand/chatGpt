'use client';
import { FC, useEffect } from 'react';
import NewChat from './NewChat';
import { useSession, signOut } from 'next-auth/react';
import {collection , query , orderBy } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { dbFirebase, firebaseApp } from '@/firebase';
import ChatRow from './ChatRow';
import { useRouter } from 'next/navigation';
interface sidebarProps {}

const SideBar: FC<sidebarProps> = () => {
  const { data: session } = useSession();
  const route = useRouter()



  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(dbFirebase, 'users', session?.user?.email!, 'chats'),
        orderBy('createdAt','asc')
      )
  );


  
  if (error) {
    return (
      <div className='bg-red-400 text-red-800 p-5 rounded-lg'>somting wnat errore</div>
    )
  }

 

  useEffect(() => {
     if (!chats?.docs.length) {
       route.replace('/');
     }
  }, []);

  return (
    <div className='flex min-h-screen flex-col overflow-hidden overflow-y-auto p-4'>
      <div className='flex-1'>
        <div>
          <NewChat />
        </div>

        <div>{/* ModelSelection */}</div>

        {/* Map through thre ChatRows */}
        <div className='mt-5 space-y-2'>
          {chats?.docs.map((chat) => (
            <ChatRow
              key={chat.id}
              id={chat.id}
            />
          ))}
        </div>
      </div>

      {session && (
        <div
          onClick={() => signOut()}
          className='group flex h-10 cursor-pointer items-center space-x-1 rounded-lg  transition-all hover:bg-gray-700'>
          <img
            className='h-10 w-10 rounded-lg'
            src={session?.user?.image!}
            alt='pic user'
          />
          <div className='flex flex-col -space-y-1'>
            <h2 className='opacity-0 group-hover:opacity-100'>
              {session?.user?.name!}
            </h2>
            <p className=' max-w-[90%] overflow-hidden truncate pr-4  text-gray-400 text-sm capitalize opacity-0 transition-all delay-75 group-hover:opacity-100'>
              {session?.user?.email!}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default SideBar;

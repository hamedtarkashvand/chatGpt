import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";
import type { NextPage } from "next";

interface propsType {
  params: {
    id:string
  };
};

const ChatPage: NextPage<propsType> = ({ params:{id} }) => {
 
  return (
    <div className='flex h-screen flex-col overflow-hidden'>
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </div>
  );
}

export default ChatPage;
'use client'
import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";
import type { NextPage } from "next";

type propsType = {
  params: {
    id:string
  };
};

const ChatPage: NextPage<propsType> = ({ params }) => {
 
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat/>
      <ChatInput chatId={params.id}/>
    </div>);
}

export default ChatPage;
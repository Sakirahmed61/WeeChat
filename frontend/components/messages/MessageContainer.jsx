import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { PiChats } from "react-icons/pi";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation()


  useEffect(() => {
    return setSelectedConversation(null)
  }, [setSelectedConversation])

  return (
    <div className="md:w-[640px] flex flex-col gap-2">
      {selectedConversation ? 
      <>
        {/* Header section */}
        <> 
          <div className="bg-slate-900/30 w-full p-3">
            <h1 className="text-xl font-bold text-gray-200">{selectedConversation.fullname}</h1>
          </div>
        </>
        <Messages />
        <MessageInput />
      </> : <NoChatSelected />
      }
    </div>
  )
}

const NoChatSelected = () => {
  
  const {authUser} = useAuthContext()
  
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col gap-2 text-center px-4 sm:text-lg md:text-xl font-semibold">
        <p>Welcome {authUser.fullname}</p>
        <p>Select a chat to start chatting</p>
        <PiChats className="size-15 w-full text-center"/>
      </div>
    </div>

  )
}

export default MessageContainer
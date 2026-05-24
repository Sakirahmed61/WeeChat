import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { PiChats } from "react-icons/pi";

const MessageContainer = () => {
  const noChatSelected = false;
  return (
    <div className="md:min-w-[450px] flex flex-col gap-2">
      {noChatSelected ? <NoChatSelected /> : 
      <>
        {/* Header section */}
        <> 
          <div className="bg-slate-900/30 w-full p-3">
            <h1 className="text-xl font-bold text-gray-200">Heading mavaney</h1>
          </div>
        </>
        <Messages />
        <MessageInput />
      </>
      }
    </div>
  )
}

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col gap-2 text-center px-4 sm:text-lg md:text-xl font-semibold">
        <p>Welcome User</p>
        <p>Select a chat to start chatting</p>
        <PiChats className="size-15 w-full text-center"/>
      </div>
    </div>

  )
}

export default MessageContainer
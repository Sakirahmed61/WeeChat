import { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessages from "../../hooks/useSendMessages";

const MessageInput = () => {

  const [message, setMessage] = useState("")
  const {loading, sendMessage} = useSendMessages()
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!message.trim()) return

    await sendMessage(message)
    setMessage("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex p-3 pt-1 align-middle">
        <input 
          type="text" 
          className="w-full p-2 input-bordered border-transparent rounded-lg input bg-gray-800/30 focus:outline-none focus:border-gray-300"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="px-5">
          {loading ? <span className="loading loading-spinner"/> : <IoSend className="size-8 hover:text-orange-300 transition-all "/>}
        </button>
      </div>
    </form>
  )
}

export default MessageInput
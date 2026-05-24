import { IoSend } from "react-icons/io5";

const MessageInput = () => {
  return (
    <form>
      <div className="flex p-3 pt-1 align-middle">
        <input 
          type="text" 
          className="w-full p-2 input-bordered border-transparent rounded-lg input-lg bg-gray-800/30 focus:outline-none focus:border-gray-300"
          placeholder="Enter your message"
        />
        <button className="px-5">
          <IoSend className="size-8 hover:text-orange-300 transition-all "/>
        </button>
      </div>
    </form>
  )
}

export default MessageInput
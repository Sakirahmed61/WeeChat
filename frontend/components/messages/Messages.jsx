import { useEffect, useRef } from "react"
import useGetMessages from "../../hooks/useGetMessages"
import Message from "./Message"
import MessageSkeleton from "./MessageSkeleton"

const Messages = () => {

  const {messages, loading} = useGetMessages()
  const lastMessageRef = useRef()
  useEffect(() => (
    lastMessageRef.current?.scrollIntoView({behavior: "smooth"})
  ))

  return (
    <div className="px-4 flex-1 overflow-auto">

      {loading && [...Array(4)].map((_,idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length > 0 && messages.map((message) => (
        <div key={message._id} ref={lastMessageRef}>
          <Message message={message} />
        </div>
      ))}

      {!loading && messages.length === 0 && (
        <p className='text-center align-middle h-full flex items-center justify-center'>Send a message to start a conversation</p>
      )}
    </div>
  )
}

export default Messages
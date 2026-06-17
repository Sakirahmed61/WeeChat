import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand/useConversation'
import { useEffect } from 'react' 

const useLIstenMessages = () => {
  
  const {socket} = useSocketContext()
  const {setMessages} = useConversation()

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage])
    }

    socket?.on("newMessage", handleNewMessage)

    return () => socket?.off("newMessage", handleNewMessage)
  },[socket, setMessages])

}

export default useLIstenMessages
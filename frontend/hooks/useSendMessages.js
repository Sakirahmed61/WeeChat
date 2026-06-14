import React, { useState } from 'react'
import useConversation from '../zustand/useConversation'

const useSendMessages = () => {
  const [loading, setLoading] = useState(false)

  const {messages, setMessages, selectedConversation} = useConversation()

  const sendMessage = async (message) => {
    setLoading(true)
    try {
      const res = await fetch(`api/message/send/${selectedConversation._id}`, {
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify({message})
      })

      const data = await res.json()
      if(!res.ok || data.error) {
        throw new Error("failed to send message", data.error)
      }

      setMessages([...messages, data])
    } catch (error) {
      console.log("Error sending message:", error)
    } finally {
      setLoading(false)
    }
  }

  return {loading, sendMessage}
}

export default useSendMessages
import React from 'react'
import useConversation from '../../zustand/useConversation'
import {useAuthContext} from '../../context/AuthContext'
import extractTime from '../../utils/extractTime'

const Message = ({message}) => {

  const {authUser} = useAuthContext()
  
  const {selectedConversation} = useConversation()

  const fromMe = message.senderId === authUser._id
  const chatClassName = fromMe ? "chat-end" : "chat-start"
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const formattedTime = extractTime(message.createdAt)
  const bubbleColor = fromMe ? "bg-sky-600/30 bg-clip-padding backdrop-filter backdrop-blur-lg" : "bg-gray-400/20 bg-clip-padding backdrop-filter backdrop-blur-lg";


  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="chat bubble component"
            src={profilePic}
          />
        </div>
      </div>
      <div className={`chat-bubble rounded-xl ${fromMe ? "rounded-br-none" : "rounded-bl-none"} ${bubbleColor}`}>
        {message.message}</div>
      <div className="chat-footer opacity-50">{formattedTime}</div>
    </div>
  )
}

export default Message
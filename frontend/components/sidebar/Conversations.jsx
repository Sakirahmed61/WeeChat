import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'
import useConversation from '../../zustand/useConversation'

const Conversations = () => {

  const {loading, conversations} = useGetConversations()
  const {searchQuery} = useConversation()
  // console.log("CONVERSATIONS:", conversations)

  const filteredConversations = searchQuery
    ? conversations.filter((conversation) =>
        conversation.fullname.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : conversations

  return (
    <div className='flex flex-col overflow-auto py-2'>
      
      {filteredConversations.map((conversation) => (
        <Conversation 
          key={conversation._id}
          conversation = {conversation}
        />
      ))}

      {loading ? <span className="loading loading-ball"></span> : null}
    </div>
  )
}

export default Conversations
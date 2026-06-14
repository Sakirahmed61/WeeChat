import React from 'react'
import useConversation from '../../zustand/useConversation'

const Conversation = ({conversation}) => {

  const {selectedConversation, setSelectedConversation} = useConversation()

  const isSelected = selectedConversation?._id === conversation._id

  return (
    <div className={`flex items-center gap-2 transition-all ${isSelected ? 'bg-gray-200/25 hover:bg-gray-200/25' : ''} hover:bg-gray-200/10 rounded border-b border-b-slate-300/30 p-2 cursor-pointer`}
      onClick={() => setSelectedConversation(conversation)}
    >
      
      <div className="avatar avatar-online">
        <div className="w-10 rounded-full">
          <img 
            src={conversation.profilePic}
            alt='User Avatar'
          />
        </div>
      </div>

      <div className="flex flex-1 justify-between items-center">
          <p className='font-semibold'>{conversation.fullname}</p>
          <span className='flex bg-white px-1.5 p-0.5 min-w-5 justify-center align-middle rounded-full text-black font-semibold text-sm'>1</span>
      </div>
    </div>
  )
}

export default Conversation
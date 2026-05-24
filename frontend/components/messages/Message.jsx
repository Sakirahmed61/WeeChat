import React from 'react'

const Message = () => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
          />
        </div>
      </div>
      <div className="chat-bubble bg-gray-400/20 bg-clip-padding backdrop-filter backdrop-blur-lg">It was said that you would, destroy the Sith, not join them.</div>
    </div>
  )
}

export default Message
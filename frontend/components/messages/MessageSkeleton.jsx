import React from 'react'

const MessageSkeleton = () => {
  return (
    <>
      <div className="flex mb-2 items-center gap-4">
        <div className="skeleton bg-gray-200/15 size-12 shrink-0 rounded-full"></div>
        <div className="flex flex-col justify-center gap-2">
          <div className="skeleton bg-gray-200/15 h-4 w-20"></div>
          <div className="skeleton bg-gray-200/15 h-4 w-28"></div>
        </div>
      </div>
      <div className="flex justify-end mb-2 items-center gap-4">
        <div className="flex flex-col justify-center items-end gap-2">
          <div className="skeleton bg-gray-200/15 h-4 w-20"></div>
          <div className="skeleton bg-gray-200/15 h-4 w-28"></div>
        </div>
        <div className="skeleton bg-gray-200/15 size-12 shrink-0 rounded-full"></div>
      </div>
    </>
  )
}

export default MessageSkeleton
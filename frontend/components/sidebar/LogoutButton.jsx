import React from 'react'
import { TbLogout2 } from "react-icons/tb";

const LogoutButton = () => {
  return (
    <div className="mt-auto">
      <TbLogout2 className='size-6 cursor-pointer transition-all hover:text-red-500' />
    </div>
  )
}

export default LogoutButton
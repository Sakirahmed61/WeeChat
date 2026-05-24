import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[580px] md:h-[650px] rounded-lg overflow-hidden bg-gray-400/20 bg-clip-padding backdrop-filter backdrop-blur-lg'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home
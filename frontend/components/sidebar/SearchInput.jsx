import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2 py-2'>
      <input 
        type="text" 
        placeholder='Search'
        className='input input-bordered input-sm rounded-lg border-transparent bg-transparent shadow-md focus:outline-none focus:border-gray-400'
      />
      <button className='btn btn-circle border-none bg-gray-400/20 btn-sm hover:bg-gray-400/40'>
        <IoSearch className='size-4'/>
      </button>
      
    </form>
  )
}

export default SearchInput
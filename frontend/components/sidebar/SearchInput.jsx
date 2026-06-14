import { IoSearch } from "react-icons/io5";
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';
import useConversation from '../../zustand/useConversation';

const SearchInput = () => {

  const { conversations } = useGetConversations()
  const { setSearchQuery } = useConversation()


  const handleChange = (e) => {
    e.preventDefault()
    const query = e.target.value
    if(!query) {
      setSearchQuery("")
      return
    }

    const filteredConversations = conversations.filter((c) => c.fullname.replaceAll(" " ,"").toLowerCase().includes(query.replaceAll(" ","").toLowerCase()))



    if(filteredConversations.length === 0) {
      toast.error("no conversations found")
      return
    }
    setSearchQuery(query)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <form className='flex items-center gap-2 py-2' onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='Search'
        className='input input-bordered input-sm rounded-lg border-transparent bg-transparent shadow-md focus:outline-none focus:border-gray-400'
        onChange={(e) => handleChange(e)}
      />
      <button className='btn btn-circle border-none bg-gray-400/20 btn-sm hover:bg-gray-400/40'>
        <IoSearch className='size-4'/>
      </button>
      
    </form>
  )
}

export default SearchInput
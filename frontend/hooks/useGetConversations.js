import {useState , useEffect} from 'react'
import {toast} from 'react-hot-toast'


const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true)
      try {

        const res = await fetch("api/users")
        const data = await res.json()
        if (!res.ok || data.error) {
          throw new Error(data.message || "Failed to fetch conversations")
        }
        // console.log(data)
        setConversations(data)
      } catch (error) {
        console.log("error in useGetConversations Hook:", error.message)
        toast.error("Failed to load conversations")
      } finally {
        setLoading(false)
      }
    }

    getConversations()
  },[])

  return {loading, conversations}
}

export default useGetConversations
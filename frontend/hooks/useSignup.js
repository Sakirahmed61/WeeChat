import { useState } from "react"
import toast from 'react-hot-toast'
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();

  const signup = async ({fullname, username, password, confirmPassword, gender}) => {
    
    // console.log("this is from inside the hook",{fullname, username, password, confirmPassword, gender})

    const success = handleInputErrors({fullname, username, password, confirmPassword, gender})
    if (!success) return;

    setLoading(true)
    try {

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({fullname, username, password, confirmPassword, gender})
      })

      const data = await res.json();
      if(data.error) throw new Error(data.error)
      
      // store it to localstorage to remember the user and auto sign-in for consecutive sign-ins
      localStorage.setItem("weechat-user", JSON.stringify(data))
      setAuthUser(data)

    } catch (error) {
        toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return {loading, signup}
}

export default useSignup

const handleInputErrors = ({fullname, username, password, confirmPassword, gender}) => {
  if(!fullname || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill every field")
    return false
  }

  if ((password.length) < 8) {
      toast.error("your password should have more than 8 characters")
      return false
  }

  if(password !== confirmPassword) {
    toast.error("check your passwords")
    return false
  }

  return true
}
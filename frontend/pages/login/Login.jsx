import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import { VscEye , VscEyeClosed } from "react-icons/vsc";
  

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const passwordRef = useRef(null)

  const {loading, login} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg bg-gray-400/20 shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-3">
          Login to
          <span className="text-orange-400"> WeeChat</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input 
              type="text" 
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  passwordRef.current.focus()
                }
              }}
              className="w-full input rounded-md border-transparent input-bordered h-10 bg-gray-900/20 hover:border-gray-200 focus:outline-none focus:border-gray-200"
            />
          </div>
          
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <div className="flex relative items-center">
              <input 
                type={showPassword ? "text" : "password"}
                placeholder="Enter password" 
                value={password}
                ref={passwordRef}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full input rounded-md border-transparent input-bordered h-10 bg-gray-900/20 hover:border-gray-200 focus:outline-none focus:border-gray-200"
              />
              <div 
              className="cursor-pointer p-1 absolute right-2 text-gray-200"
              onClick={() => setShowPassword(prev => !prev)}
              >
                {showPassword ? <VscEyeClosed /> : <VscEye /> }
              </div>
            </div>
          </div>

          <div>
            <button className="text-[16px] btn btn-block border-none rounded-lg mt-6 text-slate-800 font-bold bg-gray-200 hover:text-orange-500"
              disabled={loading}
            >
              {loading ? <span className='loading loading-spinner'></span> : "login"}
            </button>
          </div>

          <Link to="/signup" className="w-full text-sm transition-colors text-center hover:text-orange-300 mt-5 block">
            Don't have an account?
          </Link>

        </form>
      </div>
    </div>
  )
}

export default Login
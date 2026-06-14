import { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

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
              className="w-full input rounded-md border-transparent input-bordered h-10 bg-gray-900/20 hover:border-gray-200 focus:outline-none focus:border-gray-200"
            />
          </div>
          
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input 
              type="password" 
              placeholder="Enter password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full input rounded-md border-transparent input-bordered h-10 bg-gray-900/20 hover:border-gray-200 focus:outline-none focus:border-gray-200"
            />
          </div>

          <div>
            <button className="text-[16px] btn btn-block border-none rounded-lg mt-6 text-slate-800 font-bold bg-gray-200 hover:bg-gray-300 hover:text-orange-500"
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
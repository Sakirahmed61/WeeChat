import React from 'react'

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg bg-gray-400/20 shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login to
          <span className="text-orange-400"> WeeChat</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input 
              type="text" 
              placeholder="Enter Username" 
              className="w-full input rounded-md border-none input-bordered h-10" 
            />
          </div>
          
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input 
              type="password" 
              placeholder="Enter password" 
              className="w-full input rounded-md border-none input-bordered h-10" 
            />
          </div>

          <div>
            <button className="btn btn-block rounded-lg btn-sm mt-6 bg-sky-700 hover:bg-sky-800">Login</button>
          </div>

          <a href="#" className="w-full text-sm transition-colors text-center hover:text-orange-300 mt-5 block">
            Don't have an account?
          </a>

        </form>
      </div>
    </div>
  )
}

export default Login
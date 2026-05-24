import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 rounded-lg shadow-md backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h2 className="text-3xl font-semibold text-center text-gray-300">
          Sign-up to
          <span className="text-amber-400"> WeeChat</span>
        </h2>

        <form>
          <div>
            <label className='label p-2'>
              <span className="text-base label-text">Full Name</span>
            </label>
            <input 
              type="text" 
              placeholder='John Doe'
              className="w-full input input-bordered h-10 rounded-lg" />
          </div>

          <div>
            <label className='label p-2'>
              <span className="text-base label-text">Username</span>
            </label>
            <input 
              type="text" 
              placeholder='JohnDoe'
              className="w-full input input-bordered h-10 rounded-lg" />
          </div>

          <div>
            <label className='label p-2'>
              <span className="text-base label-text">Password</span>
            </label>
            <input 
              type="password" 
              placeholder='********'
              className="w-full input input-bordered h-10 rounded-lg" />
          </div>

          <div>
            <label className='label p-2'>
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input 
              type="password" 
              placeholder='********'
              minLength={8}
              className="w-full input input-bordered h-10 rounded-lg" />
          </div>

          {/* Gender goes here */}
          <GenderCheckBox />

          <button className='btn btn-block btn-md border-none bg-sky-700 mt-3 hover:bg-sky-800'>SIgn-up</button>

          <a href='#' className='w-full text-sm hover:text-orange-300 text-center transition-colors mt-3 block'>
            Already have an account?
          </a>

        </form>
      </div>
    </div>
  )
}

export default SignUp
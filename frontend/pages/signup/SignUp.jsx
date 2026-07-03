import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import {Link} from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullname: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const {loading, signup} = useSignup()

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs,gender})
  }

  const  handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs)
    signup(inputs);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 rounded-lg bg-gray-400/20 shadow-md backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h2 className="text-3xl font-semibold text-center text-gray-300 mb-3">
          Sign-up to
          <span className="text-amber-400"> WeeChat</span>
        </h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className="text-base label-text">Full Name</span>
            </label>
            <input 
              type="text" 
              placeholder='John Doe'
              className="w-full input input-bordered h-10 rounded-lg border-transparent bg-gray-900/20 hover:border-gray-200 focus:outline-none focus:border-gray-200" 
              value={inputs.fullname}
              onChange={(e) => setInputs({...inputs, fullname: e.target.value})}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className="text-base label-text">Username</span>
            </label>
            <input 
              type="text" 
              placeholder='JohnDoe'
              className="w-full input input-bordered h-10 rounded-lg border-transparent bg-gray-900/20 hover:border-gray-200 focus:outline-none focus:border-gray-200" 
              value={inputs.username}
              onChange={(e) => setInputs({...inputs, username: e.target.value})}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className="text-base label-text">Password</span>
            </label>
            <input 
              type="password"
              placeholder='********'
              className="w-full input input-bordered h-10 rounded-lg border-transparent bg-gray-900/20 hover:border-gray-200 focus:outline-none focus:border-gray-200" 
              value={inputs.password}
              onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input 
              type="password" 
              placeholder='********'
              className="w-full input input-bordered h-10 rounded-lg border-transparent bg-gray-900/20 hover:border-gray-200 focus:outline-none focus:border-gray-200" 
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
            />
          </div>

          <GenderCheckBox 
            onCheckboxChange = {handleCheckboxChange}
            selectedGender = {inputs.gender}
          />

          <button className='text-[16px] btn btn-block border-none rounded-lg mt-4 text-slate-800 font-bold bg-gray-200 hover:bg-gray-300 hover:text-orange-500'
            disabled={loading}
          >
            {loading ? <span className='loading loading-spinner'></span> : "Sign-up" }
          </button> 

          <Link to='/login' className='w-full text-sm hover:text-orange-300 text-center transition-colors mt-3 block'>
            Already have an account?
          </Link>

        </form>
      </div>
    </div>
  )
}

export default SignUp
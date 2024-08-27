import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from "../store/authSlice"


const LoginPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // handle login
  const handleLogin = () => {
    // Logout action
    dispatch(login());

    // Navigation
    navigate('/');
  }
 
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-8">
          LOGIN
      </h1>

      <form className="w-full max-w-sm bg-white p-8 rounded shadow-md">
            <div className="mb-6">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="inline-full-name">
                Username
                </label>
                <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="inline-full-name"
                type="text"
                value="Enter Username"
                />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="inline-password">
                Password
                </label>
                <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="inline-content"
                type="password"
                placeholder="**********"
                />
            </div>


            <div className="flex justify-center">
                <button
                className="shadow bg-green-900 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-4"
                type="button"
                onClick={handleLogin}
                >
                Login
                </button>

                
            </div>

            
            </div>
        </form>
    
    </div>
  )
}

export default LoginPost
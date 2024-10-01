import React from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();

    // const handleLogin = () => {
    //      // Simulate a successful login
    //      login('authToken'); // Replace with real token
    //      navigate('/'); // Redirect to home after login
    // }

  return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        <form className="max-w-md w-full space-y-4 bg-white p-6 rounded-lg shadow-md">
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your email"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your password"
                />
            </div>
            <button
                type="submit"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                // onClick={handleLogin}
            >
                LOGIN
            </button>
        </form>
    </div>

  )
}

export default Login
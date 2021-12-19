import React from 'react';
import { UserIcon, LockClosedIcon, KeyIcon, AtSymbolIcon } from "@heroicons/react/solid";

function SignUp() {

  const handleSession = ()=>{
    sessionStorage.setItem("user",JSON.stringify({
      user:"test"
    }));
  }
    return (
        <div className="flex justify-center items-center p-12 shadow-md max-w-lg mx-auto my-12">
      <div className="text-center">
        <h1 className="text-2xl text-gray-800">Welcome to Electro.</h1>
        <p className="text-xs text-gray-500 mb-6">
        Fill out the form to get started.
        </p>
        <div className="flex-col justify-center">
        <div
            className="flex items-center space-x-2 border border-gray-200
                rounded-full p-2 mb-3 focus-within:border-blue-400"
          >
            <UserIcon className="h-5 text-gray-400 border-r pr-2 border-gray-200" />
            <input type="text" placeholder="Full Name" className="outline-0" />
          </div>

          <div
            className="flex items-center space-x-2 border border-gray-200
                rounded-full p-2 mb-3 focus-within:border-blue-400"
          >
            <AtSymbolIcon className="h-5 text-gray-400 border-r pr-2 border-gray-200" />
            <input type="text" placeholder="Email" className="outline-0" />
          </div>
          <div
            className="flex items-center space-x-2 border border-gray-200
                rounded-full p-2 mb-3 focus-within:border-blue-400"
          >
            <LockClosedIcon className="h-5 text-gray-400 border-r pr-2 border-gray-200" />
            <input
              type="password"
              placeholder="Password"
              className="outline-0"
            />
          </div>

          <div
            className="flex items-center space-x-2 border border-gray-200
                rounded-full p-2 focus-within:border-blue-400"
          >
            <KeyIcon className="h-5 text-gray-400 border-r pr-2 border-gray-200" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="outline-0"
            />
          </div>
          <p
            className="text-xs text-gray-400 float-right mt-1 mr-2 
                    cursor-pointer hover:underline hover:text-gray-600"
          >
            Forgot password?
          </p>
        </div>

        <div>
          <button
            className="w-full p-2 bg-yellow-400 text-gray-800 font-bold 
                    rounded-full mt-3 transition duration-200 ease-in-out hover:scale-105"
          >
            Get Started
          </button>
          <p className="text-xs text-gray-400">
          Already have an account? 
            <span className="text-sm text-gray-700 cursor-pointer mt-2 ml-1">
              Login
            </span>
          </p>
          <p className="text-xs text-gray-500 text-center mt-4 mb-2">OR</p>
        </div>

        <div className="flex items-center justify-evenly">
          <button
            className="bg-gray-200 text-blue-800 px-6 py-2 rounded-full 
                font-semibold hover:bg-blue-800 hover:text-white transition duration-200 ease-in-out hover:scale-105"
                onClick={handleSession}
          >
            Facebook
          </button>
          <button
            className="bg-pink-200 text-red-500 px-8 py-2 
                rounded-full font-semibold hover:bg-red-500 hover:text-white transition duration-200 ease-in-out hover:scale-105"
          >
            Google
          </button>
        </div>
      </div>
    </div>
    )
}

export default SignUp;

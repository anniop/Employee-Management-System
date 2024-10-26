import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }
  return (


    <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
      <div className="border border-indigo-600 p-8 md:p-16 rounded-3xl shadow-2xl bg-gray-800 transform transition duration-500 hover:shadow-indigo-500/50 hover:scale-105">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col gap-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 text-center mb-8 relative">
            <span className="relative z-10">Jay Ganesh</span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-50 blur-lg hover:opacity-100 transition-opacity duration-500 animate-pulse"></span>
          </h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter Your Email"
            className="border border-indigo-500 py-3 px-5 bg-gray-700 text-white outline-none rounded-full placeholder:text-gray-400 focus:border-indigo-400 transition duration-300 hover:bg-gray-600 hover:shadow-lg"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter Your Password"
            className="border border-indigo-500 py-3 px-5 bg-gray-700 text-white outline-none rounded-full placeholder:text-gray-400 focus:border-indigo-400 transition duration-300 hover:bg-gray-600 hover:shadow-lg mt-2"
          />
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 py-3 px-5 text-white font-semibold rounded-full transition duration-300 hover:shadow-lg hover:from-purple-500 hover:to-indigo-500 hover:scale-105 mt-4">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;


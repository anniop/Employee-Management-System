import React from 'react'

export const Header = () => {
  return (

    <div className="relative flex items-end justify-between p-6 md:p-10 bg-gray-900 rounded-xl shadow-lg border border-indigo-600 overflow-hidden transition-transform duration-300 hover:shadow-indigo-500/50">
      {/* Neon Gradient Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-25 blur-lg animate-pulse -z-10"></div>

      <h1 className="text-2xl md:text-3xl font-medium text-white space-y-2 transition-all duration-300">
        Hello <br />
        <span className="text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 animate-text">
          Anni0p 👋
        </span>
      </h1>

      <button className="relative bg-gradient-to-r from-red-500 to-red-600 text-lg md:text-xl font-medium text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-pink-500/70 hover:scale-105">
        Logout
      </button>
    </div>
  )
}


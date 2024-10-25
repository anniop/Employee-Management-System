import React from 'react'

export const Header = () => {
  return (

    <div className="flex items-end justify-between p-4 md:p-8 bg-gray-800 rounded-xl shadow-lg border border-indigo-600">
      <h1 className="text-2xl md:text-3xl font-medium text-white">
        Hello <br />
        <span className="text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
          Anni0p 👋
        </span>
      </h1>
      <button className="bg-gradient-to-r from-red-500 to-red-600 text-lg md:text-xl font-medium text-white px-6 py-2 rounded-lg shadow-md hover:from-red-600 hover:to-red-700 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
        Logout
      </button>
    </div>
  )
}


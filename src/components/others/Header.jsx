import React, { useState } from 'react'
import { setLocalStroage } from '../../utils/localStorage'


export const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
    // window.location.reload();
  }

  return (


    <div className="flex items-end justify-between p-6 md:p-10 bg-gray-800 rounded-xl shadow-lg border border-gray-600 relative overflow-hidden">

      <h1 className="text-2xl md:text-3xl font-medium text-white space-y-2">
        Hello <br />
        <span className="text-3xl md:text-4xl font-semibold text-indigo-400">
          userName 👋
        </span>
      </h1>

      <button
        onClick={logOutUser}
        className="bg-red-500 text-lg md:text-xl font-medium text-white px-6 py-2 rounded-lg shadow-md transition-transform duration-200 hover:scale-105 hover:bg-red-600">
        Logout
      </button>
    </div>
  )
}


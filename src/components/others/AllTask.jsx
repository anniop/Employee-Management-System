import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-gray-800 p-5 mt-5 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 shadow-lg border border-indigo-600">

      {userData.map(function (elem, idx) {
        return <div key={idx} className="relative w-full h-40 flex flex-col justify-between p-5 rounded-lg bg-gradient-to-br from-blue-500 to-teal-600 text-white shadow-lg">
          <div key={idx} className="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
          <div className="relative flex items-center space-x-3">
            <span className="bg-white text-blue-500 rounded-full h-8 w-8 flex items-center justify-center font-bold">{elem.firstName.charAt(0)}</span>
            <div>
              <h2 className="text-lg font-semibold text-white">{elem.firstName}</h2>
              <p className="text-xs opacity-90 text-white">New Tasks: {elem.taskCount.newTask}</p>
            </div>
          </div>
          <div className="relative flex justify-around mt-3">
            <h3 className="font-medium text-md text-white">Active: {elem.taskCount.active}</h3>
            <h5 className="font-light bg-blue-800/80 px-3 py-1 rounded-full text-xs text-white">Completed: {elem.taskCount.completed}</h5>
            <h5 className="font-light bg-teal-800/80 px-3 py-1 rounded-full text-xs text-white">Failed: {elem.taskCount.failed}</h5>
          </div>
        </div>


      })}
    </div>
  )
}

export default AllTask; 

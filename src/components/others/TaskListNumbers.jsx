import React from 'react'

const TaskListNumbers = () => {
  return (

    <div className="flex mt-10 justify-between gap-5 screen flex-wrap">
      <div className="rounded-xl w-[45%] py-6 px-10 bg-gradient-to-r from-red-500 to-red-600 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
        <h2 className="text-4xl font-bold text-white mb-1">0</h2>
        <h3 className="text-lg font-medium text-gray-200">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-10 bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
        <h2 className="text-4xl font-bold text-white mb-1">0</h2>
        <h3 className="text-lg font-medium text-gray-200">In Progress</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-10 bg-gradient-to-r from-green-500 to-green-600 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
        <h2 className="text-4xl font-bold text-white mb-1">0</h2>
        <h3 className="text-lg font-medium text-gray-200">Completed</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-10 bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
        <h2 className="text-4xl font-bold text-gray-900 mb-1">0</h2>
        <h3 className="text-lg font-medium text-gray-800">Pending Review</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers;

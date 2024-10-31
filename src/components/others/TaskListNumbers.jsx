import React from 'react'
import './heartbeat.css'

const TaskListNumbers = ({ data }) => {
  return (

    <div className="flex mt-10 justify-between gap-5 screen flex-wrap">
      <div className="rounded-xl w-[45%] py-6 px-10 bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
        <h2 className="text-4xl font-bold text-white mb-1">{data.taskCount.newTask}</h2>
        <h3 className="text-lg font-medium text-gray-200">New Task</h3>
      </div>

      <div className="heartbeat rounded-xl w-[45%] py-6 px-10 bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg hover:shadow-xl transition duration-300">
        <h2 className="text-4xl font-bold text-white mb-1">{data.taskCount.active}</h2>
        <h3 className="text-lg font-medium text-gray-200">In Progress</h3>
      </div>

      <div className="rounded-xl w-[45%] py-6 px-10 bg-gradient-to-r from-green-500 to-green-600 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
        <h2 className="text-4xl font-bold text-white mb-1">{data.taskCount.completed}</h2>
        <h3 className="text-lg font-medium text-gray-200">Completed</h3>
      </div>

      <div className="rounded-xl w-[45%] py-6 px-10 bg-gradient-to-r from-red-400 to-red-500 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
        <h2 className="text-4xl font-bold text-gray-900 mb-1">{data.taskCount.failed}</h2>
        <h3 className="text-lg font-medium text-gray-800">Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers;

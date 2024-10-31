import React from 'react'

const TaskListNumbers = ({ data }) => {
  return (


    <div className="flex mt-10 justify-between gap-5 flex-wrap">
      {/* New Task Card */}
      <div className="rounded-xl w-full sm:w-[45%] py-6 px-10 bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
        <h2 className="text-4xl font-bold text-white mb-1">{data.taskCount.newTask}</h2>
        <h3 className="text-lg font-medium text-gray-200">New Task</h3>
      </div>

      {/* In Progress Card */}
      <div className="rounded-xl w-full sm:w-[45%] py-6 px-10 bg-gradient-to-r from-indigo-500 to-indigo-600 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
        <h2 className="text-4xl font-bold text-white mb-1">{data.taskCount.active}</h2>
        <h3 className="text-lg font-medium text-gray-200">In Progress</h3>
      </div>

      {/* Completed Task Card */}
      <div className="rounded-xl w-full sm:w-[45%] py-6 px-10 bg-gradient-to-r from-green-500 to-green-600 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
        <h2 className="text-4xl font-bold text-white mb-1">{data.taskCount.completed}</h2>
        <h3 className="text-lg font-medium text-gray-200">Completed</h3>
      </div>

      {/* Failed Task Card */}
      <div className="rounded-xl w-full sm:w-[45%] py-6 px-10 bg-gradient-to-r from-red-500 to-red-600 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
        <h2 className="text-4xl font-bold text-white mb-1">{data.taskCount.failed}</h2>
        <h3 className="text-lg font-medium text-gray-200">Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers;

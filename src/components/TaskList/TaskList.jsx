import React from 'react'

const TaskList = () => {
  return (

    <div id="tasklist" className="h-[55%] flex items-center overflow-x-auto py-5 mt-10 gap-5 flex-nowrap">
      <div className="h-full w-[300px] bg-gradient-to-br from-red-400 to-red-500 rounded-xl flex-shrink-0 p-5 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-700 text-white px-3 py-1 rounded-xl text-sm font-semibold">High</h3>
          <h3 className="text-sm text-gray-200">25 Oct 2024</h3>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-white">Make a React Application</h2>
        <p className="text-sm mt-2 text-gray-300">Create an application using the React library.</p>
      </div>

      <div className="h-full w-[300px] bg-gradient-to-br from-red-400 to-red-500 rounded-xl flex-shrink-0 p-5 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-700 text-white px-3 py-1 rounded-xl text-sm font-semibold">High</h3>
          <h3 className="text-sm text-gray-200">27 Oct 2024</h3>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-white">Complete The Assignments</h2>
        <p className="text-sm mt-2 text-gray-300">Complete the college assignments.</p>
      </div>

      <div className="h-full w-[300px] bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex-shrink-0 p-5 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
        <div className="flex justify-between items-center">
          <h3 className="bg-yellow-700 text-white px-3 py-1 rounded-xl text-sm font-semibold">Medium</h3>
          <h3 className="text-sm text-gray-200">29 Oct 2024</h3>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-white">Go To Gym</h2>
        <p className="text-sm mt-2 text-gray-300">Go to the gym and work out.</p>
      </div>

      <div className="h-full w-[300px] bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex-shrink-0 p-5 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
        <div className="flex justify-between items-center">
          <h3 className="bg-green-700 text-white px-3 py-1 rounded-xl text-sm font-semibold">Low</h3>
          <h3 className="text-sm text-gray-200">30 Oct 2024</h3>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-white">Drink Water</h2>
        <p className="text-sm mt-2 text-gray-300">Drink 4 liters of water.</p>
      </div>

      <div className="h-full w-[300px] bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex-shrink-0 p-5 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
        <div className="flex justify-between items-center">
          <h3 className="bg-blue-700 text-white px-3 py-1 rounded-xl text-sm font-semibold">Don't Do</h3>
          <h3 className="text-sm text-gray-200">01 Nov 2024</h3>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-white">Read Books</h2>
        <p className="text-sm mt-2 text-gray-300">Read books daily to increase knowledge.</p>
      </div>
    </div>
  )
}

export default TaskList

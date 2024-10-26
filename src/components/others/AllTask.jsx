import React from 'react'

const AllTask = () => {
  return (


    <div className="bg-gray-800 p-5 mt-5 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 shadow-lg border border-indigo-600">
      {/* Task 1 */}
      <div className="relative w-full h-40 flex flex-col justify-between p-5 rounded-lg bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-md">
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        <div className="relative flex items-center space-x-3">
          <span className="bg-white text-red-500 rounded-full h-8 w-8 flex items-center justify-center font-bold">A</span>
          <div>
            <h2 className="text-lg font-semibold">Aniket</h2>
            <p className="text-xs opacity-75">Due Today</p>
          </div>
        </div>
        <h3 className="relative font-medium text-center text-md">Make A React Website</h3>
        <h5 className="relative font-light bg-red-600/80 px-3 py-1 rounded-full text-xs text-center">In Progress</h5>
      </div>

      {/* Task 2 */}
      <div className="relative w-full h-40 flex flex-col justify-between p-5 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md">
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        <div className="relative flex items-center space-x-3">
          <span className="bg-white text-green-500 rounded-full h-8 w-8 flex items-center justify-center font-bold">V</span>
          <div>
            <h2 className="text-lg font-semibold">Varun</h2>
            <p className="text-xs opacity-75">Due Tomorrow</p>
          </div>
        </div>
        <h3 className="relative font-medium text-center text-md">Fix Bugs in API</h3>
        <h5 className="relative font-light bg-green-600/80 px-3 py-1 rounded-full text-xs text-center">Completed</h5>
      </div>

      {/* Task 3 */}
      <div className="relative w-full h-40 flex flex-col justify-between p-5 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 shadow-md">
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        <div className="relative flex items-center space-x-3">
          <span className="bg-gray-900 text-yellow-400 rounded-full h-8 w-8 flex items-center justify-center font-bold">M</span>
          <div>
            <h2 className="text-lg font-semibold text-white">Mansi</h2>
            <p className="text-xs text-gray-200 opacity-75">In 3 Days</p>
          </div>
        </div>
        <h3 className="relative font-medium text-center text-md text-white">UI/UX Design</h3>
        <h5 className="relative font-light bg-yellow-600/80 px-3 py-1 rounded-full text-xs text-center text-gray-900">Pending</h5>
      </div>

      {/* Task 4 */}
      <div className="relative w-full h-40 flex flex-col justify-between p-5 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md">
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        <div className="relative flex items-center space-x-3">
          <span className="bg-white text-blue-500 rounded-full h-8 w-8 flex items-center justify-center font-bold">S</span>
          <div>
            <h2 className="text-lg font-semibold">Shivranjan</h2>
            <p className="text-xs opacity-75">Due Next Week</p>
          </div>
        </div>
        <h3 className="relative font-medium text-center text-md">Backend Integration</h3>
        <h5 className="relative font-light bg-indigo-600/80 px-3 py-1 rounded-full text-xs text-center">In Review</h5>
      </div>

      {/* Task 5 */}
      <div className="relative w-full h-40 flex flex-col justify-between p-5 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white shadow-md">
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        <div className="relative flex items-center space-x-3">
          <span className="bg-white text-purple-500 rounded-full h-8 w-8 flex items-center justify-center font-bold">R</span>
          <div>
            <h2 className="text-lg font-semibold">Rutvij</h2>
            <p className="text-xs opacity-75">No Deadline</p>
          </div>
        </div>
        <h3 className="relative font-medium text-center text-md">Documentation</h3>
        <h5 className="relative font-light bg-purple-600/80 px-3 py-1 rounded-full text-xs text-center">On Hold</h5>
      </div>
    </div>
  )
}

export default AllTask; 

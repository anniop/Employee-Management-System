import React from 'react'

const AcceptTask = ({ data }) => {
  console.log()
  return (
    <div className="h-full w-[300px] bg-gradient-to-br from-rose-500 to-red-600 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-800 text-white px-3 py-1 rounded-lg text-xs font-semibold tracking-wide">{data.category}</h3>
        <h3 className="text-xs text-gray-200 font-light">{data.taskDate}</h3>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-white leading-tight">{data.taskTitle}</h2>
      <p className="text-xs mt-3 text-gray-300 leading-relaxed">
        {data.description}
      </p>
      <div className="flex justify-between mt-6 space-x-2">
        <button className="bg-gradient-to-r from-green-500 to-green-600 text-white py-1 px-2 rounded-md text-xs font-medium shadow-md hover:from-green-400 hover:to-green-500 transition-transform transform hover:scale-105">
          Completed
        </button>
        <button className="bg-gradient-to-r from-red-500 to-red-600 text-white py-1 px-2 rounded-md text-xs font-medium shadow-md hover:from-red-400 hover:to-red-500 transition-transform transform hover:scale-105">
          Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask

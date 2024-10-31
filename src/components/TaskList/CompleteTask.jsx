import React from 'react'

const CompletedTask = ({ data }) => {
  return (
    <div className="h-full w-[300px] bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex-shrink-0 p-5 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
      <div className="flex justify-between items-center">
        <h3 className="bg-green-700 text-white px-3 py-1 rounded-xl text-sm font-semibold">{data.category}</h3>
        <h3 className="text-sm text-gray-200">{data.taskDate}</h3>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-white">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-gray-300">{data.description}</p>
      <div className='mt-4'>
        <button className='w-full bg-gradient-to-br from-green-600 to-green-800 mt-4'>Completed</button>
      </div>
    </div>
  )
}

export default CompletedTask

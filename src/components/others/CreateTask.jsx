
import React from 'react'

const CreateTask = () => {
  return (

    <div className="p-5 bg-gray-800 mt-7 rounded-2xl shadow-lg border border-indigo-600">
      <form className="flex flex-wrap w-full items-start justify-between">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              className="text-sm py-2 px-3 w-[90%] rounded-lg outline-none bg-transparent border border-indigo-500 text-gray-200 placeholder:text-gray-400 focus:border-indigo-400 transition duration-300"
              type="text"
              placeholder="Make UI Design"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <input
              className="text-sm py-2 px-3 w-[90%] rounded-lg outline-none bg-transparent border border-indigo-500 text-gray-200 placeholder:text-gray-400 focus:border-indigo-400 transition duration-300"
              type="date"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-sm text-gray-300 mb-1">Assign To</h3>
            <input
              className="text-sm py-2 px-3 w-[90%] rounded-lg outline-none bg-transparent border border-indigo-500 text-gray-200 placeholder:text-gray-400 focus:border-indigo-400 transition duration-300"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input
              className="text-sm py-2 px-3 w-[90%] rounded-lg outline-none bg-transparent border border-indigo-500 text-gray-200 placeholder:text-gray-400 focus:border-indigo-400 transition duration-300"
              type="text"
              placeholder="Design, Dev, etc"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-sm text-gray-300 mb-1">Description</h3>
          <textarea
            className="text-sm py-2 px-3 w-[90%] rounded-lg outline-none bg-transparent border border-indigo-500 text-gray-200 placeholder:text-gray-400 focus:border-indigo-400 transition duration-300"
            rows="6"
            placeholder="Add task description"
          ></textarea>
          <button className="bg-gradient-to-r from-purple-500 to-indigo-600 py-3 px-5 text-white font-medium rounded-lg w-[90%] mt-4 hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg transition duration-300 transform hover:scale-105">
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask; 

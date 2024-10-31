
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';


const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      assignTo,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    };

    const updatedData = userData.map((elem) => {
      if (assignTo === elem.firstName) {
        elem.tasks.push(newTask);
        return {
          ...elem,
          tasks: [...elem.tasks, newTask],
          taskCount: {
            ...elem.taskCount,
            newTask: elem.taskCount.newTask + 1,
          }
        };
      }
      return elem;
    });

    setUserData(updatedData);
    console.log(updatedData);

    setTaskTitle('');
    setCategory('');
    setAssignTo('');
    setTaskDate('');
    setTaskDescription('');
  };

  return (
    <div className="p-5 bg-gray-800 mt-7 rounded-2xl shadow-2xl border border-indigo-600 transition duration-300 hover:shadow-indigo-500/50">
      <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between">
        {/* Left Column */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <div>
            <h3 className="text-sm text-indigo-300 mb-1">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-2 px-3 w-[90%] rounded-lg outline-none bg-gray-700 border border-indigo-500 text-gray-200 placeholder:text-gray-400 focus:border-indigo-400 focus:bg-gray-800 transition duration-300"
              type="text"
              placeholder="Make UI Design"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-sm text-indigo-300 mb-1">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-2 px-3 w-[90%] rounded-lg outline-none bg-gray-700 border border-indigo-500 text-gray-200 placeholder:text-gray-400 focus:border-indigo-400 focus:bg-gray-800 transition duration-300"
              type="date"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-sm text-indigo-300 mb-1">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-2 px-3 w-[90%] rounded-lg outline-none bg-gray-700 border border-indigo-500 text-gray-200 placeholder:text-gray-400 focus:border-indigo-400 focus:bg-gray-800 transition duration-300"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-sm text-indigo-300 mb-1">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-2 px-3 w-[90%] rounded-lg outline-none bg-gray-700 border border-indigo-500 text-gray-200 placeholder:text-gray-400 focus:border-indigo-400 focus:bg-gray-800 transition duration-300"
              type="text"
              placeholder="Design, Dev, etc"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2">
          <h3 className="text-sm text-indigo-300 mb-1">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="text-sm py-2 px-3 w-[90%] rounded-lg outline-none bg-gray-700 border border-indigo-500 text-gray-200 placeholder:text-gray-400 focus:border-indigo-400 focus:bg-gray-800 transition duration-300"
            rows="6"
            placeholder="Add task description"
          ></textarea>
          <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-3 px-5 text-white font-medium rounded-lg w-[90%] mt-4 shadow-md hover:from-pink-500 hover:to-red-600 hover:shadow-lg transition duration-300 transform hover:scale-105 active:scale-95 focus:ring-4 focus:ring-purple-700">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;

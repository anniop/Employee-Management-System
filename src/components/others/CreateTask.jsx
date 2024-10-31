
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
    <div className="p-6 bg-gray-900 mt-7 rounded-2xl shadow-lg border border-indigo-600">
      <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between">
        {/* Left Column */}
        <div className="w-full md:w-1/2 mb-6">
          <div className="mb-4">
            <label className="text-sm text-indigo-300 mb-1 block">Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg bg-gray-800 border border-indigo-500 text-gray-200 placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none transition duration-300"
              type="text"
              placeholder="Make UI Design"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-sm text-indigo-300 mb-1 block">Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg bg-gray-800 border border-indigo-500 text-gray-200 placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none transition duration-300"
              type="date"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-sm text-indigo-300 mb-1 block">Assign To</label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg bg-gray-800 border border-indigo-500 text-gray-200 placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none transition duration-300"
              type="text"
              placeholder="Employee Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-sm text-indigo-300 mb-1 block">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg bg-gray-800 border border-indigo-500 text-gray-200 placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none transition duration-300"
              type="text"
              placeholder="Design, Dev, etc"
              required
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <label className="text-sm text-indigo-300 mb-1 block">Description</label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg bg-gray-800 border border-indigo-500 text-gray-200 placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none transition duration-300"
              rows="6"
              placeholder="Add task description"
              required
            ></textarea>
          </div>
          <button className="mt-4 w-full py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md transition duration-300 hover:bg-indigo-700">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}
export default CreateTask;

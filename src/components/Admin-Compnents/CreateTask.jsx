import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { XMarkIcon } from "@heroicons/react/24/solid";

export const DropdownList = ({
  label,
  onChange,
  placeholder,
  values,
  value,
}) => (
  <div className="mb-3">
    <label className="text-sm text-gray-600 mb-1 block">{label}</label>
    <select
      value={value}
      onChange={onChange}
      className="text-sm py-2 px-3 w-full rounded-lg bg-gray-100 border border-gray-300 text-black placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none transition duration-300"
      required
    >
      <option value="">{placeholder}</option>
      {values.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  </div>
);

const CreateTask = ({ closeCreateTask }) => {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  const [assignees, setAssignees] = useState([]);
  const [categories, setCategories] = useState([
    "Development",
    "Design",
    "Marketing",
    "Sales",
  ]);

  useEffect(() => {
    if (userData) {
      const assigneeNames = userData.map((user) => user.firstName);
      setAssignees(assigneeNames);
    }
  }, [userData]);

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      assignTo,
      priority,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedData = userData.map((elem) => {
      if (assignTo === elem.firstName) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTask],
          taskCount: {
            ...elem.taskCount,
            newTask: elem.taskCount.newTask + 1,
          },
        };
      }
      return elem;
    });

    setUserData(updatedData);
    console.log(updatedData);

    setTaskTitle("");
    setCategory("");
    setAssignTo("");
    setTaskDate("");
    setTaskDescription("");
    setPriority("");
  };

  return (
    <div className="shadow-lg fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-lg z-50">
      <div className="bg-white text-gray-800 shadow-lg rounded-lg w-[1000px] p-6 z-50">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold text-indigo-500">Create Task</h2>
          <XMarkIcon
            className="h-6 w-6 cursor-pointer"
            style={{ fill: "black" }}
            onClick={closeCreateTask} // Call the close function
          />
        </div>
        <form
          onSubmit={submitHandler}
          className="flex flex-wrap w-full items-start justify-between"
        >
          <div className="w-full md:w-1/2 md:pr-3">
            <div className="mb-4">
              <label className="text-sm text-gray-600 mb-1 block">
                Task Title
              </label>
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                className="text-sm py-2 px-3 w-full bg-gray-100 rounded-lg border border-gray-300 text-black placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none transition duration-300"
                type="text"
                placeholder="Make UI Design"
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-sm text-gray-600 mb-1 block">
                Description
              </label>
              <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="text-sm py-2 px-3 w-full bg-gray-100 rounded-lg border border-gray-300 text-back placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none transition duration-300"
                rows="8"
                placeholder="Add task description"
                required
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-3">
            <DropdownList
              label="Assigned To"
              onChange={(e) => setAssignTo(e.target.value)}
              placeholder="Assigned To"
              values={assignees}
              value={assignTo}
              required
            />
            <DropdownList
              label="Priority"
              onChange={(e) => setPriority(e.target.value)}
              placeholder="Select Priority"
              values={["High", "Medium", "Low"]}
              value={priority}
              required
            />
            <DropdownList
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Select Category"
              values={categories}
              value={category}
              required
            />
            <div className="mb-4">
              <label className="text-sm text-gray-600 mb-1 block">
                Due Date
              </label>
              <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                type="date"
                className="text-sm py-2 px-3 w-full bg-gray-100 rounded-lg border border-gray-300 text-black placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none transition duration-300"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white text-lg font-semibold py-2 px-4 rounded-md w-full mt-8"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;

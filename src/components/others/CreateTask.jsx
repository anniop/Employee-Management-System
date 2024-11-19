import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";

export const DropdownList = ({
  label,
  onChange,
  placeholder,
  values,
  value,
}) => (
  <div className="mb-3">
    <label className="text-sm text-indigo-300 mb-1 block">{label}</label>
    <select
      value={value}
      onChange={onChange}
      className="text-sm py-2 px-3 w-full rounded-lg bg-gray-800 border border-indigo-500 text-gray-200 placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none transition duration-300"
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

const CreateTask = () => {
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
    const employeesData = localStorage.getItem("employees");
    if (employeesData) {
      const employees = JSON.parse(employeesData);
      const assigneeNames = employees.map((employee) => employee.firstName);
      setAssignees(assigneeNames);
    }
  }, []);

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
    <div className="p-6 bg-gray-900 mt-7 rounded-2xl shadow-lg border border-indigo-600">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-full md:w-1/2 md:pr-3">
          <div className="mb-4">
            <label className="text-sm text-indigo-300 mb-1 block">
              Task Title
            </label>
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
            <label className="text-sm text-indigo-300 mb-1 block">
              Description
            </label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg bg-gray-800 border border-indigo-500 text-gray-200 placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none transition duration-300"
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
            <label className="text-sm text-indigo-300 mb-1 block">
              Due Date
            </label>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg bg-gray-800 border border-indigo-500 text-gray-200 placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none transition duration-300"
              required
            />
          </div>
        </div>
        <button className="mt-4 w-full py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md transition duration-300 hover:bg-indigo-700">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;

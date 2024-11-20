import React, { useEffect, useState } from "react";
import { Header } from "../others/Header";
import CreateTask from "../Admin-Compnents/CreateTask";
import AllTask from "../others/AllTask";
import AddEmployee from "../Admin-Compnents/AddEmployee";
import { PlusCircleIcon, UserPlusIcon } from "@heroicons/react/24/solid";

const AdminDashboard = (props) => {
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [showAddEmployee, setShowAddEmployee] = useState(false);

  const handleCreateTaskToggle = () => setShowCreateTask((prev) => !prev);
  const handleAddEmployeeToggle = () => setShowAddEmployee((prev) => !prev);

  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={props.changeUser} data={props.data} />
      <div className="mt-8 flex flex-col md:flex-row items-center justify-around gap-6">
        <button
          className="flex items-center justify-center bg-indigo-500 md:w-1/3 min-h-[150px] text-white px-6 py-4 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 hover:bg-indigo-600"
          onClick={handleCreateTaskToggle}
        >
          <PlusCircleIcon className="h-12 w-12 mr-4" />
          <div className="text-left">
            <h3 className="text-2xl font-semibold">Create Task</h3>
            <p className="mt-1 text-sm text-gray-200">
              Assign tasks and manage progress.
            </p>
          </div>
        </button>

        <button
          className="flex items-center justify-center bg-indigo-500 md:w-1/3 min-h-[150px] text-white px-6 py-4 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 hover:bg-indigo-600"
          onClick={handleAddEmployeeToggle}
        >
          <UserPlusIcon className="h-12 w-12 mr-4" />
          <div className="text-left">
            <h3 className="text-2xl font-semibold">Add Employee</h3>
            <p className="mt-1 text-sm text-gray-200">
              Add and manager team members.
            </p>
          </div>
        </button>
      </div>
      <div className="mt-10">
        <AllTask />
      </div>
      {showCreateTask && <CreateTask />}
      {showAddEmployee && <AddEmployee />}
    </div>
  );
};

export default AdminDashboard;

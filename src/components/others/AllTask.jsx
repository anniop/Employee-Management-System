import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  if (!Array.isArray(userData)) {
    // In case userData is not an array, return a fallback UI
    return <p className="text-white">No data available</p>;
  }

  return (
    <div className="bg-gray-800 p-5 mt-5 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 shadow-lg border border-indigo-600">
      {userData.map((elem, idx) => {
        // Ensure elem and elem.firstName are defined
        const firstNameInitial = elem?.firstName?.charAt(0) || 'N/A';
        const firstName = elem?.firstName || 'Unknown';
        const newTasks = elem?.taskCount?.newTask ?? 0;
        const activeTasks = elem?.taskCount?.active ?? 0;
        const completedTasks = elem?.taskCount?.completed ?? 0;
        const failedTasks = elem?.taskCount?.failed ?? 0;

        return (
          <div
            key={idx}
            className="relative w-full h-40 flex flex-col justify-between p-5 rounded-lg bg-gradient-to-br from-blue-500 to-teal-600 text-white shadow-lg"
          >
            <div className="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
            <div className="relative flex items-center space-x-3">
              <span className="bg-white text-blue-500 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                {firstNameInitial}
              </span>
              <div>
                <h2 className="text-lg font-semibold text-white">{firstName}</h2>
                <p className="text-xs opacity-90 text-white">New Tasks: {newTasks}</p>
              </div>
            </div>
            <div className="relative flex justify-around mt-3">
              <h3 className="font-medium text-md text-white">Active: {activeTasks}</h3>
              <h5 className="font-light bg-blue-800/80 px-3 py-1 rounded-full text-xs text-white">
                Completed: {completedTasks}
              </h5>
              <h5 className="font-light bg-teal-800/80 px-3 py-1 rounded-full text-xs text-white">
                Failed: {failedTasks}
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;

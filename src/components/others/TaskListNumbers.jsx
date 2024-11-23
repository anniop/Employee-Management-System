import React, { useEffect, useState } from "react";

export const TaskStatusCard = ({ count, type, textColor, borderColor }) => {
  return (
    <div
      className={`rounded-t-xl w-full sm:w-[45%] lg:w-[22%] py-8 px-12 bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 flex flex-col justify-center items-center border-b-4 ${borderColor}`}
      aria-label={`${count} ${type}`}
    >
      <h2 className={`text-4xl font-bold ${textColor} mb-2`}>{count}</h2>
      <h3 className={`text-lg font-medium text-gray-400`}>{type}</h3>
    </div>
  );
};

const TaskListNumbers = ({ data }) => {
  const [counts, setCounts] = useState({});
  const taskStatuses = [
    {
      type: "New Task",
      textColor: "text-blue-400",
      borderColor: "border-blue-400",
      cardKey: "newTask",
    },
    {
      type: "In Progress",
      textColor: "text-indigo-400",
      borderColor: "border-indigo-400",
      cardKey: "active",
    },
    {
      type: "Completed",
      textColor: "text-green-400",
      borderColor: "border-green-400",
      cardKey: "completed",
    },
    {
      type: "Failed Task",
      textColor: "text-red-400",
      borderColor: "border-red-400",
      cardKey: "failed",
    },
  ];

  useEffect(() => {
    setCounts(data.taskCount);
  }, [data]);

  return (
    <div className="flex flex-wrap justify-between mt-10 gap-6">
      {taskStatuses.map((elem) => (
        <TaskStatusCard
          key={elem.cardKey}
          count={counts[elem.cardKey] || 0}
          type={elem.type}
          textColor={elem.textColor}
          borderColor={elem.borderColor}
        />
      ))}
    </div>
  );
};

export default TaskListNumbers;

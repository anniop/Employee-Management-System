import React from "react";

const ShortDetailTaskCard = ({
  category,
  priority,
  taskTitle,
  taskDate,
  description,
  isActive,
}) => {
  const priorityColors = {
    high: "bg-red-500",
    medium: "bg-yellow-500",
    low: "bg-green-500",
  };

  const priorityColor = priorityColors[priority.toLowerCase()] || "bg-gray-300";

  return (
    <div
      className={`h-full min-w-[300px] max-w-[360px] bg-gray-800 rounded-xl flex-shrink-0 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105`}
    >
      <div className={`h-1 w-full rounded-t-xl ${priorityColor}`}></div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <div className="flex space-x-2">
            {category && (
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                {category}
              </span>
            )}
            {priority && (
              <span
                className={`${priorityColor} text-white px-3 py-1 rounded-full text-xs font-medium`}
              >
                {priority}
              </span>
            )}
          </div>
          <span className="text-xs text-gray-400">{`Due: ${taskDate}`}</span>
        </div>
        <h2 className="text-lg font-semibold text-white mb-2 truncate">
          {taskTitle}
        </h2>
        <p className="text-sm text-gray-300 line-clamp-3">{description}</p>
        {isActive && (
          <div className="mt-4">
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-105">
              Accept Task
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShortDetailTaskCard;

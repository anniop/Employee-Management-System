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
    // When using the featured section change the color to bg-gray-900
    <div
      className={`h-full min-w-[300px] max-w-[360px] bg-gray-800 rounded-xl flex-shrink-0 shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105`}
    >
      <div
        className={`h-1 w-full rounded-t-xl ${priorityColor} transition-all duration-300 ease-in-out`}
      ></div>

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            {category && (
              <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 hover:bg-gray-600">
                {category}
              </span>
            )}
            {priority && (
              <span
                className={`${priorityColor} text-white px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 hover:bg-opacity-80`}
              >
                {priority}
              </span>
            )}
          </div>
          <span className="text-xs text-gray-400 transition-all duration-200 hover:text-white">
            {`Due: ${taskDate}`}
          </span>
        </div>

        <h2 className="text-xl font-semibold text-white mb-2 truncate transition-all duration-200 hover:text-blue-400">
          {taskTitle}
        </h2>

        <p className="text-sm text-gray-300 line-clamp-3 transition-all duration-200 hover:text-gray-200">
          {description}
        </p>

        {isActive && (
          <div className="mt-5">
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-700 transform hover:scale-105">
              Accept Task
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShortDetailTaskCard;

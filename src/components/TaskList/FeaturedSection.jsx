import React, { useState } from "react";
import ShortDetailTaskCard from "./ShortDetailTaskCard";
import { TagIcon } from "@heroicons/react/16/solid";
import { StarIcon as FilledStarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";

const Featured = ({ data }) => {
  const [tasks, setTasks] = useState(data?.tasks || []);

  const toggleFeatured = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.taskId === taskId ? { ...task, isFeatured: !task.isFeatured } : task,
    );
    setTasks(updatedTasks);
  };

  const featuredTasks = tasks.filter((task) => task.isFeatured);
  const hasFeaturedTasks = featuredTasks.length > 0;

  return (
    <div className="min-h-[40%] bg-gray-800 px-5 py-5 rounded-xl shadow-lg border border-gray-600 mt-10">
      {hasFeaturedTasks && (
        <div>
          <div className="flex items-center mb-1">
            <h1 className="text-xl font-semibold text-white whitespace-nowrap">
              Featured Tasks
            </h1>
            <div className="flex-1 border-t border-gray-600 ml-3"></div>
          </div>
          <div className="flex gap-5 py-5 min-h-[90%] overflow-x-auto scrollbar-hide flex-nowrap items-center">
            {featuredTasks.map((elem, idx) => (
              <ShortDetailTaskCard
                key={elem.taskId || idx}
                category={elem.category}
                priority={elem.priority}
                taskTitle={elem.taskTitle}
                taskDate={elem.taskDate}
                description={elem.taskDescription}
                isActive={elem.isActive}
              />
            ))}
          </div>
        </div>
      )}
      <div className="mt-0">
        <div className="flex items-center mb-5">
          <h1 className="text-xl font-semibold text-white">All Tasks</h1>
          <div className="flex-1 border-t border-gray-600 ml-3"></div>
        </div>
        <div className="space-y-4">
          {tasks.length > 0 ? (
            tasks.map((elem, idx) => (
              <div
                key={elem.taskId || idx}
                className="bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-600 relative"
              >
                <div className="absolute top-3 right-3 flex flex-wrap gap-2">
                  <TagIcon className="h-5 pt-1 w-5 text-gray-300" />
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-lg ${
                      elem.priority.toLowerCase() === "high"
                        ? "bg-red-600 text-white"
                        : elem.priority.toLowerCase() === "medium"
                          ? "bg-yellow-500 text-gray-900"
                          : "bg-green-500 text-gray-900"
                    }`}
                  >
                    {elem.priority}
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold rounded-lg bg-gray-900 text-white">
                    {elem.category}
                  </span>
                  <span className="px-3 py-1 text-xs font-medium text-white">
                    Due: {elem.taskDate}
                  </span>
                </div>
                <div className="flex gap-x-2">
                  <h2 className="text-lg font-semibold text-indigo-300">
                    {elem.taskTitle}
                  </h2>
                  {elem.isFeatured ? (
                    <FilledStarIcon
                      className="w-5 text-yellow-400 cursor-pointer"
                      onClick={() => toggleFeatured(elem.taskId)}
                    />
                  ) : (
                    <OutlineStarIcon
                      className="w-5 text-yellow cursor-pointer"
                      onClick={() => toggleFeatured(elem.taskId)}
                    />
                  )}
                </div>
                <p className="text-sm text-gray-300 mt-2 line-clamp-2">
                  {elem.taskDescription || "No description provided."}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">No tasks available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Featured;

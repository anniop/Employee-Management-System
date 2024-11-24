import React from "react";
import ShortDetailTaskCard from "./ShortDetailTaskCard";

const Featured = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="min-h-[40%] bg-gray-800 px-5 py-5 rounded-xl shadow-lg border border-gray-600 mt-10"
    >
      <div className="flex items-center mb-5">
        <h1 className="text-xl font-semibold text-indigo-400 whitespace-nowrap">
          Featured Tasks
        </h1>
        <div className="flex-1 border-t border-gray-600 ml-3"></div>
      </div>

      <div className="flex gap-5 py-8 min-h-[90%] overflow-x-auto scrollbar-hide flex-nowrap items-center">
        {data?.tasks?.map((elem, idx) => (
          <ShortDetailTaskCard
            key={idx}
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
  );
};

export default Featured;

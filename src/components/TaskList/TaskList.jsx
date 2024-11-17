import React from "react";
import ShortDetailTaskCard from "./ShortDetailTaskCard";

const TaskList = ({ data }) => {
  // Check if data exists and tasks is an array
  const tasks = data?.tasks ?? [];

  return (
    <div
      id="tasklist"
      className="h-[40%] flex items-center overflow-x-auto py-5 mt-10 gap-5 flex-nowrap"
    >
      {tasks.length > 0 ? (
        tasks.map((elem, idx) => (
          <ShortDetailTaskCard
            key={idx}
            category={elem.category}
            priority={elem.priority}
            taskTitle={elem.taskTitle}
            taskDate={elem.taskDate}
            description={elem.description}
            isActive={elem.isActive}
          />
        ))
      ) : (
        <p className="text-gray-500">No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;

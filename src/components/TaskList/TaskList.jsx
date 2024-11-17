import React from "react";
import ShortDetailTaskCard from "./ShortDetailTaskCard";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[40%] flex items-center overflow-x-auto py-5 mt-10 gap-5 flex-nowrap"
    >
      {data.tasks.map((elem, idx) => {
        return (
          <ShortDetailTaskCard
            key={idx}
            category={elem.category}
            priority={elem.priority}
            taskTitle={elem.taskTitle}
            taskDate={elem.taskDate}
            description={elem.description}
            isActive={elem.isActive}
          />
        );
      })}
    </div>
  );
};

export default TaskList;

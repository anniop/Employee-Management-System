import React from "react";
import ShortDetailTaskCard from "./ShortDetailTaskCard";

export const TaskListCard = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[40%] flex items-center overflow-x-auto py-5 mt-10 gap-5 flex-nowrap"
    >
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
  );
};


import React, { useState, useEffect } from 'react';
import { TaskStatusCard } from './TaskStatusCard';

const TaskListNumbers = ({ data }) => {
  const [counts, setCounts] = useState({});
  const taskStatuses = [
    { type: 'New Task', color: 'blue', cardKey: 'newTask' },
    { type: 'In Progress', color: 'indigo', cardKey: 'active' },
    { type: 'Completed', color: 'green', cardKey: 'completed' },
    { type: 'Failed Task', color: 'red', cardKey: 'failed' },
  ];

  useEffect(() => {
    setCounts(data.taskCount);
  }, [data]);

  return (
    <div className="flex mt-10 justify-between gap-8 flex-wrap">
      {taskStatuses.map((elem, idx) => (
        <TaskStatusCard
          key={elem.cardKey + idx}
          count={counts[elem.cardKey] || 0} // Default to 0 if count is undefined
          type={elem.type}
          color={elem.color}
        />
      ))}
    </div>
  );
};

export default TaskListNumbers;

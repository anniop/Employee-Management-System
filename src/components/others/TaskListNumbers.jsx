import React from 'react'
import { useState, useEffect } from 'react'

export const TaskStatusCard = ({ count, type, color }) => (
  <>
    <div className={`rounded-xl w-full sm:w-[45%] py-6 px-10 bg-gradient-to-r from-${color}-500 to-${color}-600 shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105`}>
      <h2 className="text-4xl font-bold text-white mb-1">{count}</h2>
      <h3 className="text-lg font-medium text-gray-200">{type}</h3>
    </div>
  </>
)

const TaskListNumbers = ({ data }) => {

  const [counts, setCounts] = useState({})
  const taskStatuses = [
    { type: 'New Task', color: 'blue', cardKey: 'newTask' },
    { type: 'In Progress', color: 'indigo', cardKey: 'active' },
    { type: 'Completed', color: 'green', cardKey: 'completed' },
    { type: 'Failed Task', color: 'red', cardKey: 'failed' },
  ]

  useEffect(() => {
    setCounts(data.taskCount)
  }, [data])

  return (
    <div className="flex mt-10 justify-between gap-5 flex-wrap">
      {taskStatuses.map((elem, idx) => (
        <TaskStatusCard key={elem.cardKey+idx} count={counts[elem.cardKey]} type={elem.type} color={elem.color} />
      ))}
    </div>
  )
}
export default TaskListNumbers;

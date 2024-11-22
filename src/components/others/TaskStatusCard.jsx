import React from 'react';

export const TaskStatusCard = ({ count, type, color }) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    indigo: 'from-indigo-500 to-indigo-600',
    green: 'from-green-500 to-green-600',
    red: 'from-red-500 to-red-600',
  };

  const gradientClass = colorClasses[color] || '';

  return (
    <div
      className={`rounded-xl w-full sm:w-[45%] py-8 px-12 bg-gradient-to-r ${gradientClass} shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 flex flex-col justify-center items-center`}
    >
      <h2 className="text-5xl font-extrabold text-white mb-2">{count}</h2>
      <h3 className="text-xl font-semibold text-gray-200">{type}</h3>
    </div>
  );
};

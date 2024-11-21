import React from "react";

const Notification = ({ message, isVisible }) => {
  return (
    isVisible && (
      <div
        className="fixed top-4 right-4 w-80 p-4 bg-green-500 text-white rounded-lg shadow-lg transition-all duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(-10px)",
        }}
      >
        <span className="font-semibold">{message}</span>
      </div>
    )
  );
};

export default Notification;

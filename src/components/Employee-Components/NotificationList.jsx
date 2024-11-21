import React from "react";
import { FaBell } from "react-icons/fa"; // Subtle bell icon

const NotificationList = ({ notifications }) => {
  return (
    <div className="w-full rounded-lg shadow-lg p-5 mt-5 max-h-[400px] overflow-auto"
      style={{
        background: "linear-gradient(135deg, #81c7e6, #f0f9ff)", // Soft Blue and White Gradient
      }}>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Notifications</h3>
      <div className="mt-4">
        {notifications.length === 0 ? (
          <p className="text-gray-500">No new notifications</p>
        ) : (
          notifications.map((notification, idx) => (
            <div
              key={idx}
              className="flex items-start p-4 mb-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition duration-200 transform hover:scale-100"
            >
              <div className="bg-gray-300 text-gray-600 p-2 rounded-full mr-3">
                <FaBell size={20} />
              </div>
              <div>
                <p className="text-gray-700 font-semibold">{notification.title}</p>
                <p className="text-sm text-gray-500">{notification.message}</p>
                <p className="text-xs text-gray-400 mt-1">{notification.timestamp}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationList;

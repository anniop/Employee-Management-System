import React, { useState } from "react";
import close from "../../assets/close-icon.png";
const ProfilePopper = ({ logOutUser, initialData }) => {
  const handleInputChange = (e) => {
    // will work on logic once we add auth and everything for database
  };

  const handleSave = () => {
    // Will work on logic once we add auth and everything for database
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white text-gray-800 shadow-lg rounded-lg w-96 p-6 z-50">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold text-indigo-500">
            Edit Profile
          </h2>
          <button
            type="button"
            className="bg-white rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-label="Close"
          >
            <img src={close} alt="Close" className="w-4 h-4" />
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="text-gray-600 font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={""}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-black focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-gray-600 font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={""}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-black focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button
            type="button"
            onClick={handleSave}
            className="bg-indigo-500 w-full text-white px-4 py-2 rounded-md shadow-md transition-transform duration-200 hover:scale-105 hover:bg-indigo-600"
          >
            Save
          </button>
          <button
            type="button"
            onClick={logOutUser}
            className="bg-red-500 w-full text-white px-4 py-2 rounded-md shadow-md transition-transform duration-200 hover:scale-105 hover:bg-red-600"
          >
            Logout
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePopper;

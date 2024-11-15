import React, { useState } from "react";

const ProfilePopper = ({ logOutUser, initialData }) => {
  const handleInputChange = (e) => {
    // will work on logic once we add auth and everything for database
  };

  const handleSave = () => {
    // Will work on logic once we add auth and everything for database
  };

  return (
    <div className="popper-container fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-gray-800 shadow-lg rounded-lg w-96 p-6 z-50">
      <h2 className="text-xl font-semibold text-indigo-500 mb-4 text-center">
        Edit Profile
      </h2>
      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-600 font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={""}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400 "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-600 font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={""}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={handleSave}
            className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-md transition-transform duration-200 hover:scale-105 hover:bg-indigo-600"
          >
            Save
          </button>
          <button
            type="button"
            onClick={logOutUser}
            className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md transition-transform duration-200 hover:scale-105 hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePopper;

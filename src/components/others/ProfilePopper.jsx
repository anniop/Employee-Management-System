import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const ProfilePopper = ({ initialData, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: initialData?.firstName || "",
    email: initialData?.email || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Form data saved:", formData);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50 popper-container"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 text-gray-200 shadow-lg rounded-lg w-96 p-6 z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold text-indigo-400">
            Edit Profile
          </h2>
          <button
            type="button"
            className="bg-gray-800 rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-300 hover:bg-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-label="Close"
            onClick={onClose}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="firstName" className="text-gray-400 font-medium">
              Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full border border-gray-600 rounded-md px-3 py-2 mt-1 text-black focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-gray-400 font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-600 rounded-md px-3 py-2 mt-1 mb-10 text-black focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button
            type="button"
            onClick={handleSave}
            className="bg-indigo-500 w-full text-white px-4 py-2 rounded-md shadow-md transition-transform duration-200 hover:scale-105 hover:bg-indigo-600"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePopper;


import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#222] p-8 rounded-lg shadow-xl transform transition-all duration-500 ease-in-out scale-100 sm:scale-105 animate-slideIn">
        <div className="flex items-center mb-4">
          <FaExclamationCircle className="text-red-500 text-3xl mr-3 animate-pulse" />
          <h2 className="text-2xl font-semibold text-white">Alert</h2>
        </div>
        <p className="text-white text-lg mb-6">{message}</p>
        <button
          className="w-full py-2 text-lg font-medium bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-md hover:from-pink-500 hover:to-red-500 transition duration-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;

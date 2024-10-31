import { FaExclamationCircle } from "react-icons/fa";

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-[#1c1c1c] p-8 rounded-lg shadow-2xl transform transition-all duration-500 ease-in-out sm:scale-105 animate-slideIn">
        <div className="flex items-center space-x-3">
          <FaExclamationCircle className="text-red-500 text-2xl animate-pulse" />
          <h3 className="text-lg font-semibold text-white">Alert</h3>
        </div>
        <p className="mt-3 text-gray-300">{message}</p>
        <button
          onClick={onClose}
          className="mt-5 w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 text-white py-2 rounded-md font-medium shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;

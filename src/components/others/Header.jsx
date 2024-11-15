import React, { useState, useEffect } from "react";
import "../../utils/localStorage";
import profile from "../../assets/profile.png";
import ProfilePopper from "./ProfilePopper";
export const Header = ({ changeUser, data = {} }) => {
  const [isPopperVisible, setIsPopperVisible] = useState(false);

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  const togglePopper = () => {
    setIsPopperVisible((prev) => !prev);
  };

  const closePopper = (e) => {
    if (!e.target.closest(".popper-container")) {
      setIsPopperVisible(false);
    }
  };

  useEffect(() => {
    if (isPopperVisible) {
      document.addEventListener("mousedown", closePopper);
    } else {
      document.removeEventListener("mousedown", closePopper);
    }
    return () => document.removeEventListener("mousedown", closePopper);
  }, [isPopperVisible]);

  const username = data?.firstName ?? "World";

  return (
    <div className="flex items-end justify-between p-6 md:p-10 bg-gray-800 rounded-xl shadow-lg border border-gray-600 relative overflow-hidden">
      <div className="flex gap-5">
        <img
          src={profile}
          className="w-20 h-20 rounded-full cursor-pointer"
          // onClick={togglePopper}
        />
        <h1 className="text-2xl md:text-3xl font-medium text-white space-y-2">
          Hello <br />
          <span className="text-3xl md:text-4xl font-semibold text-indigo-400">
            {username} 👋
          </span>
        </h1>
      </div>
      <div className="mx-0 my-auto">
        <button
          onClick={logOutUser}
          className="bg-red-500 text-lg md:text-xl font-medium text-white px-6 py-2 rounded-lg shadow-md transition-transform duration-200 hover:scale-105 hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {isPopperVisible && (
        <ProfilePopper logOutUser={logOutUser} togglePopper={togglePopper} />
      )}
    </div>
  );
};

export default Header;

import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { XMarkIcon } from "@heroicons/react/24/outline";

const AddEmployee = ({ closeAddEmployee }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for alert visibility
  const [alertVisible, setAlertVisible] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: userData.length + 1,
      firstName,
      email,
      password,
      tasks: [],
      taskCount: {
        newTask: 0,
        active: 0,
        completed: 0,
        failed: 0,
      },
    };

    const updatedData = [...userData, newEmployee];
    setUserData(updatedData);
    console.log(updatedData);

    setFirstName("");
    setEmail("");
    setPassword("");

    setAlertVisible(true);

    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };

  useEffect(() => {
    if (userData.length !== 0)
      localStorage.setItem("employees", JSON.stringify(userData));
  }, [userData]);

  return (
    <div className="shadow-lg fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-lg z-50">
      <div className="bg-gray-800 text-white shadow-lg rounded-lg max-w-lg w-full p-6 z-50">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold text-indigo-500">Create Employee</h2>
          <XMarkIcon
            className="h-6 w-6 cursor-pointer"
            style={{ stroke: "white", fill: "none" }}
            onClick={closeAddEmployee}
          />
        </div>
        <form onSubmit={submitHandler} className="flex flex-col space-y-6">
          <div className="space-y-5">
            <div>
              <label className="text-sm text-gray-300 mb-1 block">
                First Name
              </label>
              <input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="text-sm py-2 px-4 w-full bg-gray-700 rounded-lg border border-gray-600 text-white placeholder:text-gray-400 focus:bg-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300"
                type="text"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm text-gray-300 mb-1 block"
              >
                Email
              </label>
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-sm py-2 px-4 w-full bg-gray-700 rounded-lg border border-gray-600 text-white placeholder:text-gray-400 focus:bg-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm text-gray-300 mb-1 block"
              >
                Password
              </label>
              <input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-sm py-2 px-4 w-full bg-gray-700 rounded-lg border border-gray-600 text-white placeholder:text-gray-400 focus:bg-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-3 px-6 rounded-md w-full mt-8 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400">
            Add Employee
          </button>
        </form>
      </div>

      {alertVisible && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 p-4 bg-green-500 text-white rounded-md shadow-lg">
          <p>Employee Added Successfully</p>
        </div>
      )}
    </div>
  );
};

export default AddEmployee;

import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AddEmployee = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  };

  useEffect(() => {
    if (userData.length !== 0)
      localStorage.setItem("employees", JSON.stringify(userData));
  }, [userData]);

  return (
    <div className="p-6 bg-gray-800 mt-7 rounded-2xl shadow-lg border border-indigo-500 max-w-xl mx-auto">
      <form onSubmit={submitHandler} className="flex flex-col space-y-6">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="firstName"
              className="text-sm text-indigo-300 mb-1 block"
            >
              First Name
            </label>
            <input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="text-sm py-2 px-4 w-full rounded-md bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-400 focus:outline-none transition duration-200"
              type="text"
              placeholder="TestUser"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-sm text-indigo-300 mb-1 block"
            >
              Email
            </label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-sm py-2 px-4 w-full rounded-md bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-400 focus:outline-none transition duration-200"
              type="email"
              placeholder="test.user@something.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm text-indigo-300 mb-1 block"
            >
              Password
            </label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-sm py-2 px-4 w-full rounded-md bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-400 focus:outline-none transition duration-200"
              type="password"
              placeholder="Enter password"
              required
            />
          </div>
        </div>
        <button className="w-full py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md transition duration-300 hover:bg-indigo-700 focus:ring focus:ring-indigo-500 focus:outline-none">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;

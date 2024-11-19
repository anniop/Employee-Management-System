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
    <div className="p-8 bg-gradient-to-r from-gray-800 to-gray-900 mt-7 rounded-3xl shadow-xl border border-indigo-500 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-indigo-400 mb-6">Add Employee</h2>
      <form onSubmit={submitHandler} className="flex flex-col space-y-6">
        <div className="space-y-5">
          <div>
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-indigo-300 mb-2 block"
            >
              First Name
            </label>
            <input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="text-sm py-3 px-4 w-full rounded-xl bg-gray-800 border border-gray-700 text-gray-300 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-400 focus:outline-none transition-all duration-300"
              type="text"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-indigo-300 mb-2 block"
            >
              Email
            </label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-sm py-3 px-4 w-full rounded-xl bg-gray-800 border border-gray-700 text-gray-300 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-400 focus:outline-none transition-all duration-300"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-indigo-300 mb-2 block"
            >
              Password
            </label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-sm py-3 px-4 w-full rounded-xl bg-gray-800 border border-gray-700 text-gray-300 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-400 focus:outline-none transition-all duration-300"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>
        <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 focus:ring focus:ring-indigo-400 focus:outline-none">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;

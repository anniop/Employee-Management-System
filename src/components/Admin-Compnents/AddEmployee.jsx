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
    <div className="p-6 bg-gray-900 mt-7 rounded-2xl shadow-lg border border-indigo-600">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-full md:w-1/2 md:pr-3">
          <div className="mb-4">
            <label className="text-sm text-indigo-300 mb-1 block">
              First Name
            </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg bg-gray-800 border border-indigo-500 text-gray-200 placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none transition duration-300"
              type="text"
              placeholder="John"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-sm text-indigo-300 mb-1 block">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg bg-gray-800 border border-indigo-500 text-gray-200 placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none transition duration-300"
              type="email"
              placeholder="john.doe@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-sm text-indigo-300 mb-1 block">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg bg-gray-800 border border-indigo-500 text-gray-200 placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none transition duration-300"
              type="password"
              placeholder="Enter password"
              required
            />
          </div>
        </div>
        <button className="mt-4 w-full py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md transition duration-300 hover:bg-indigo-700">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;

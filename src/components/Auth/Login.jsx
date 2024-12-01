import React, { useState } from "react";
import { UserGroupIcon } from "@heroicons/react/24/solid";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
      {/* Outer container with a darker background and subtle shadow */}
      <div className="border border-gray-700 p-8 md:p-12 rounded-xl shadow-lg bg-gray-800 max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <UserGroupIcon className="h-10 w-10 text-white" />
        </div>

        {/* Form Section */}
        <form onSubmit={submitHandler} className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Welcome Back
          </h2>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="border border-gray-600 py-3 px-4 bg-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors duration-200"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            className="border border-gray-600 py-3 px-4 bg-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition-colors duration-200"
          />

          <button className="bg-indigo-600 py-3 px-4 text-white font-semibold rounded-lg transition duration-200 hover:bg-indigo-500 mt-4">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

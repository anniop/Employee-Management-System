import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';

const AddEmployee = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // For toggling password visibility
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // Get access to userData and addEmployee function from context
  const [userData, addEmployee] = useContext(AuthContext);

  const onSubmit = (data) => {
    setLoading(true);

    // Create a new employee object
    const newEmployee = {
      id: Date.now(), // Unique ID
      firstName: data.firstName,
      email: data.email,
      designation: data.designation,
      password: data.password,
      taskCount: {
        newTask: 0,
        active: 0,
        completed: 0,
        failed: 0,
      }
    };

    // Add the new employee to userData (context)
    addEmployee(newEmployee);

    // Reset the form after submission
    reset();
    setLoading(false);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto mt-6 border border-indigo-600">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">Add New Employee</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* First Name Input */}
        <div>
          <label className="block font-medium text-gray-700">First Name</label>
          <input
            type="text"
            {...register('firstName', { required: 'First Name is required' })}
            className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-100 text-gray-700 placeholder-gray-400"
            placeholder="Enter first name"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
        </div>

        {/* Email Input */}
        <div>
          <label className="block font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
            className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-100 text-gray-700 placeholder-gray-400"
            placeholder="Enter email address"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Designation Input */}
        <div>
          <label className="block font-medium text-gray-700">Designation</label>
          <input
            type="text"
            {...register('designation', { required: 'Designation is required' })}
            className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-100 text-gray-700 placeholder-gray-400"
            placeholder="Enter designation"
          />
          {errors.designation && <p className="text-red-500 text-sm">{errors.designation.message}</p>}
        </div>

        {/* Password Input */}
        <div>
          <label className="block font-medium text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: 'Password is required' })}
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-100 text-gray-700 placeholder-gray-400"
              placeholder="Enter password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-3 mt-4 font-semibold text-white rounded-lg ${loading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'}`}
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Employee'}
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;

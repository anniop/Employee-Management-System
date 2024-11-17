import React, { createContext, useEffect, useState } from 'react';
import { getLocalStroage, setLocalStroage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve employee data from localStorage on component mount
    const { employees } = getLocalStroage();
    setUserData(employees || []); // Default to an empty array if no employees are found
  }, []);

  // Function to add an employee and update localStorage
  const addEmployee = (newEmployee) => {
    const updatedUserData = [...userData, newEmployee];
    setUserData(updatedUserData); // Update state
    setLocalStroage({ employees: updatedUserData }); // Update localStorage
  };

  return (
    <AuthContext.Provider value={[userData, addEmployee]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

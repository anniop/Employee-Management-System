
import { useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
import { getLocalStorage, setLocalStorage } from './utils/localStorage.jsx';
import CustomAlert from './components/others/CustomAlert';

function App() {
  const [user, setUser] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      console.log("This is Admin");
    } else if (email === 'user@me.com' && password === '123') {
      console.log("This is User");
    } else {
      setAlertMessage("Invalid Credentials"); // Trigger custom alert
    }
  };

  const closeAlert = () => {
    setAlertMessage(null); // Close custom alert
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
      {alertMessage && <CustomAlert message={alertMessage} onClose={closeAlert} />}
    </>
  );
}

export default App;

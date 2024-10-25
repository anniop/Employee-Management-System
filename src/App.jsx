import { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { getLocalStorage, setLocalStorage } from './utils/localStorage.jsx'
function App() {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      console.log("This is Admin");
    } else if (email == 'user@me.com' && password == '123') {
      console.log("This is User")
    } else {
      alert("Invalid Credentials")
    }
  }
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>

  )
}
export default App

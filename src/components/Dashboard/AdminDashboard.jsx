import React from 'react'
import { Header } from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';
import AddEmployee from '../others/AddEmployee'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-10'>
      <Header changeUser={props.changeUser} data={props.data} />
      <CreateTask />
      <AllTask />
      <AddEmployee />
    </div>
  )
}

export default AdminDashboard; 

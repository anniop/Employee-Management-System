import React from "react";
import { Header } from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-gray h-screen w-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} />

    </div>
  );
};

export default EmployeeDashboard;

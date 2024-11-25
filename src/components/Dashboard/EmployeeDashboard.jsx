import React from "react";
import { Header } from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import FeaturedSection from "../TaskList/FeaturedSection";

const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-gray h-screen w-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <FeaturedSection data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;

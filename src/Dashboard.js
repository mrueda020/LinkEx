import React from "react";
import Sidebar from "./Sidebar";
import TopContainer from "./TopContainer";
function Dashboard() {
  return (
    <div className="w3-light-grey">
      <TopContainer></TopContainer>
      <Sidebar></Sidebar>
    </div>
  );
}

export default Dashboard;

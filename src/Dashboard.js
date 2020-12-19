import React from "react";
import Sidebar from "./Sidebar";
import TopContainer from "./TopContainer";
import Main from "./MainContent";
function Dashboard() {
  return (
    <div className="w3-light-grey">
      <TopContainer></TopContainer>
      <Sidebar></Sidebar>
      <div class="w3-main" style={{ marginLeft: " 300px", marginTop: "43px" }}>
        <Main></Main>
      </div>
    </div>
  );
}

export default Dashboard;

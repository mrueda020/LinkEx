import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import TopContainer from "../TopContainer/TopContainer";
import Main from "../MainContent/MainContent";
const useConstructor = (callBack = () => {}) => {
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  if (hasBeenCalled) return;
  callBack();
  setHasBeenCalled(true);
};
function Dashboard() {
  const [user, setUser] = useState({ redirectToReferrer: false, name: "" });
  useConstructor(() => {
    if (sessionStorage.getItem("userData")) {
      let data = JSON.parse(sessionStorage.getItem("userData"));
      if (data) {
        setUser({ ...user, name: data.userData.firstname });
        console.log(data.userData.firstname);
      }
    } else {
      setUser({ ...user, redirectToReferrer: true });
    }
    console.log(user);
  });

  if (user.redirectToReferrer) {
    console.log("Login");
    return <Redirect to={"/signin"} />;
  }
  return (
    <div className="w3-light-grey">
      <TopContainer></TopContainer>
      <Sidebar userName={user.name}></Sidebar>
      <div class="w3-main" style={{ marginLeft: " 300px", marginTop: "43px" }}>
        <Main></Main>
      </div>
    </div>
  );
}

export default Dashboard;

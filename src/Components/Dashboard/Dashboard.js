import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Sidebar from "../Sidebar/Sidebar";
import TopContainer from "../TopContainer/TopContainer";
import Main from "../MainContent/MainContent";
import Evaluations from "../Evaluations/Evaluations";
import { PostData } from "../Services/PostData";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        LinkEx
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useConstructor = (callBack = () => {}) => {
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  if (hasBeenCalled) return;
  callBack();
  setHasBeenCalled(true);
};

function Dashboard() {
  const [user, setUser] = useState({
    redirectToReferrer: false,
    name: "",
    email: "",
  });
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    var data = JSON.parse(sessionStorage.getItem("userData"));
    setUser({ ...user, name: data.userData.nombre });

    PostData("getGrades", user).then((result) => {
      let responseJson = result;
      if (responseJson.grades) {
        var grades = responseJson.grades;
        setGrades(grades);
        console.log(grades);
      } else alert(result.error);
    });
  }, []);

  useConstructor(() => {
    if (sessionStorage.getItem("userData")) {
      var data = JSON.parse(sessionStorage.getItem("userData"));
      if (data) {
        setUser({ ...user, email: data.userData.email });
        console.log(user);
      }
    } else {
      setUser({ ...user, redirectToReferrer: true });
    }
  });

  if (user.redirectToReferrer) {
    return <Redirect to={"/signin"} />;
  }
  return (
    <div className="w3-light-grey">
      <TopContainer></TopContainer>
      <Sidebar userName={user.name}></Sidebar>

      <div
        className="w3-main"
        style={{ marginLeft: " 300px", marginTop: "43px" }}
      >
        <Main grades={grades}></Main>
        <Evaluations userEmail={user.email} grades={grades}></Evaluations>
        <footer
          style={{ height: "100%" }}
          className="w3-container w3-padding-16 w3-grey"
        >
          <Copyright></Copyright>
        </footer>
      </div>
    </div>
  );
}

export default Dashboard;

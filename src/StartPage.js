import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import "./StartPage.css";
function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        LinkEx
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const StartPage = () => {
  return (
    <>
      <div className="w3-container background">
        <h2
          style={{
            fontFamily: "Lobster, serif",
            color: "white",
            fontSize: "350%",
          }}
        >
          LinkEx
        </h2>
      </div>
      <footer
        style={{ height: "100%" }}
        className="w3-container w3-padding-16 w3-black"
      >
        <Copyright></Copyright>
      </footer>
    </>
  );
};

export default StartPage;

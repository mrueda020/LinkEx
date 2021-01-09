import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <div>
      <div className="topnav" id="myTopnav">
        <Link to="/">Inicio</Link>
        <Link to="/signup">Registrate</Link>
        <Link to="/signin">Entra</Link>
        <Link className="icon" href onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

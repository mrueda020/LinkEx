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
        <a className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
}

export default Navbar;

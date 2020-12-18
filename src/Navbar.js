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
      <div class="topnav" id="myTopnav">
        <Link class="active">Inicio</Link>
        <Link to="/signup">Registrate</Link>
        <Link to="/signin">Entra</Link>

        <Link class="icon" href onClick={myFunction}>
          <i class="fa fa-bars"></i>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

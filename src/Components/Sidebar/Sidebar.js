import React, { useState } from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import { Avatar } from "@material-ui/core";
import { Redirect, Link } from "react-router-dom";

function Sidebar({ userName }) {
  const [user, setUser] = useState({ redirectToReferrer: false });
  function closeMenu() {
    var mySidebar = document.getElementById("mySidebar");
    var overlayBg = document.getElementById("myOverlay");
    if (mySidebar && overlayBg) {
      mySidebar.style.display = "none";
      overlayBg.style.display = "none";
    }
  }

  const logOut = () => {
    sessionStorage.setItem("userData", "");
    sessionStorage.clear();
    setUser({ redirectToReferrer: true });
  };
  if (user.redirectToReferrer) {
    return <Redirect to="/"></Redirect>;
  }
  return (
    <div>
      <nav
        className="w3-sidebar w3-collapse w3-white w3-animate-left"
        style={{ zIndex: 3, width: "300px" }}
        id="mySidebar"
      >
        <br />
        <div
          className="w3-container w3-row"
          style={{ alignItems: "center", marginTop: "40px" }}
        >
          <div
            className="w3-col s4 "
            style={{ width: "46px", padding: "25px", marginRight: "30px" }}
          >
            <Avatar src={"https://www.w3schools.com/w3images/avatar2.png"} />
          </div>
          <div style={{ marginTop: "5px" }} className="w3-col s8 w3-bar">
            <span>
              Bienvenido <strong>{userName}</strong>
            </span>
            <br />
            <div style={{ marginTop: "5px" }}>
              <Link
                href="#"
                className="w3-bar-item w3-button"
                style={{ borderRadius: "10px" }}
              >
                <SettingsIcon></SettingsIcon>
              </Link>
              <Link
                onClick={logOut}
                href="#"
                className="w3-bar-item w3-button"
                style={{ borderRadius: "10px" }}
              >
                <ExitToAppIcon />
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="w3-container">
          <h5>Menu Principal</h5>
        </div>
        <div className="w3-bar-block">
          <Link
            href="#"
            className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black"
            onClick={closeMenu}
            title="close menu"
          >
            <i className="fa fa-remove fa-fw"></i>  Cerrar
          </Link>
          <Link href="#" className="w3-bar-item w3-button w3-padding w3-blue">
            <i className="fa fa-users fa-fw"></i>  Vista general
          </Link>

          <Link href="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-bank fa-fw"></i>  Evaluaciones
          </Link>
          <Link href="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-history fa-fw"></i>  Historial
          </Link>
          <Link href="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-cog fa-fw"></i>  Configuración
          </Link>
          <br />
          <br />
        </div>
      </nav>

      <div
        className="w3-overlay w3-hide-large w3-animate-opacity"
        onClick={closeMenu}
        style={{ cursor: PointerEvent }}
        title="close side menu"
        id="myOverlay"
      ></div>
    </div>
  );
}

export default Sidebar;

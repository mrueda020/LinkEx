import React from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
function Sidebar() {
  function closeMenu() {
    console.log(mySidebar, overlayBg);
    var mySidebar = document.getElementById("mySidebar");
    var overlayBg = document.getElementById("myOverlay");
    if (mySidebar && overlayBg) {
      mySidebar.style.display = "none";
      overlayBg.style.display = "none";
    }
  }

  return (
    <div>
      <nav
        className="w3-sidebar w3-collapse w3-white w3-animate-left"
        style={{ zIndex: 3, width: "300px" }}
        id="mySidebar"
      >
        <br />
        <div className="w3-container w3-row">
          <div className="w3-col s4">
            <img
              src="/w3images/avatar2.png"
              className="w3-circle w3-margin-right"
              style={{ width: "46px" }}
            />
          </div>
          <div className="w3-col s8 w3-bar">
            <span>
              Welcome, <strong>Mike</strong>
            </span>
            <br />

            <a href="#" className="w3-bar-item w3-button">
              <AccountCircleIcon></AccountCircleIcon>
            </a>
            <a href="#" className="w3-bar-item w3-button">
              <SettingsIcon></SettingsIcon>
            </a>
            <a href="#" className="w3-bar-item w3-button">
              <ExitToAppIcon />
            </a>
          </div>
        </div>
        <hr />
        <div className="w3-container">
          <h5>Menu Principal</h5>
        </div>
        <div className="w3-bar-block">
          <a
            href="#"
            className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black"
            onClick={closeMenu}
            title="close menu"
          >
            <i className="fa fa-remove fa-fw"></i>  Cerrar
          </a>
          <a href="#" className="w3-bar-item w3-button w3-padding w3-blue">
            <i className="fa fa-users fa-fw"></i>  Vista general
          </a>

          <a href="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-bank fa-fw"></i>  Evaluaciones
          </a>
          <a href="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-history fa-fw"></i>  Historial
          </a>
          <a href="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-cog fa-fw"></i>  Configuración
          </a>
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
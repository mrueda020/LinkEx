import React from "react";

function TopContainer() {
  function openMenu() {
    var mySidebar = document.getElementById("mySidebar");
    var overlayBg = document.getElementById("myOverlay");

    console.log(mySidebar, overlayBg);
    if (mySidebar && overlayBg) {
      if (mySidebar.style.display === "block") {
        mySidebar.style.display = "none";
        overlayBg.style.display = "none";
      } else {
        mySidebar.style.display = "block";
        overlayBg.style.display = "block";
      }
    }
  }

  return (
    <div>
      <div className="w3-bar w3-top w3-black w3-large" style={{ zIndex: 4 }}>
        <button
          className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey"
          onClick={openMenu}
        >
          <i className="fa fa-bars"></i>  LinkEx
        </button>
        <span className="w3-bar-item w3-right">Logo</span>
      </div>
    </div>
  );
}

export default TopContainer;

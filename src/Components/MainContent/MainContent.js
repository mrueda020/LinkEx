import React from "react";
import CachedIcon from "@material-ui/icons/Cached";
import "./MainContent.css";
function MainContent({ grades }) {
  return (
    <div id="Main">
      <div className="w3-container">
        <div className="items">
          <h5>Ultimos Resultados</h5>
          <a
            href="#"
            onClick={() => {
              window.location.reload(false);
            }}
            className="w3-bar-item w3-button"
            style={{
              borderRadius: "10px",
              alignContent: "center",
              marginLeft: "10px",
              marginTop: "5px"
            }}
          >
            <CachedIcon></CachedIcon>
          </a>
        </div>

        {grades.map((grade, index) => {
          return (
            <div key={index}>
              {grade[3] ? (
                <>
                  <h5>{grade[1]}</h5>
                  <div className="w3-grey">
                    <div
                      className="w3-container w3-center w3-padding w3-blue"
                      style={{ width: "100%" }}
                    >
                      Pendiente por realizar
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h5>{grade[1]}</h5>
                  <div className="w3-grey">
                    <div
                      className={`w3-container w3-center w3-padding ${
                        grade[2] / grade[5] >= 0.6 ? "w3-green" : "w3-red"
                      }`}
                      style={{ width: `${(grade[2] / grade[5]) * 100}${"%"}` }}
                    >
                      {(grade[2] / grade[5]) * 100}%
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
      <hr />

      <div className="w3-container w3-dark-grey">
        <h5>Comentarios</h5>
        <div className="w3-row">
          <div className="w3-col m2 text-center"></div>
          <div className="w3-col m10 w3-container">
            <h4>
              John
              <span className="w3-opacity w3-medium w3-margin-left">
                Sep 29, 20120, 9:12 PM
              </span>
            </h4>
            <p>
              Realiza los examenes siguientes para reforzar tus conocimientos en
              programacion, estos les serviran de practica.
            </p>
            <br />
          </div>
        </div>

        <div className="w3-row">
          <div className="w3-col m2 text-center"></div>
          <div className="w3-col m10 w3-container">
            <h4>
              Bob
              <span className="w3-opacity w3-medium w3-margin-left">
                Sep 28, 2020, 10:15 PM
              </span>
            </h4>
            <p>
              El proximo día Lunes se subiran a la plataforma los examenes para
              reforzar los conocimientos de Liderazgos y Desarrollo Profesional
              asi que repasen los conceptos vistos en clase.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;

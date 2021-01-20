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
            className="w3-bar-item w3-button"
            style={{
              borderRadius: "10px",
              alignContent: "center",
              marginLeft: "10px",
              marginTop: "5px",
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
                        grade[2] / grade[5] > 0.6 ? "w3-green" : "w3-red"
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              quibusdam esse voluptates ab in maxime recusandae veritatis vero
              sit sed, totam placeat ex fuga quae quisquam, odio nam corporis
              sapiente?
            </p>
            <br />
          </div>
        </div>

        <div className="w3-row">
          <div className="w3-col m2 text-center"></div>
          <div className="w3-col m10 w3-container">
            <h4>
              Bo
              <span className="w3-opacity w3-medium w3-margin-left">
                Sep 28, 2020, 10:15 PM
              </span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              asperiores maiores quidem quae ex voluptatum rem necessitatibus
              neque quo perspiciatis veritatis enim, mollitia ipsam aut quod
              molestias repellat odio debitis.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;

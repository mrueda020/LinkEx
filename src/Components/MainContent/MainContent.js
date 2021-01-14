import React from "react";

function MainContent({ grades }) {
  return (
    <div id="Main">
      <div className="w3-container">
        <h5 style={{ marginTop: "25px" }}>Ultimos Resultados</h5>
        {/* <p>Calculo</p>
        <div className="w3-grey">
          <div
            className="w3-container w3-center w3-padding w3-blue"
            style={{ width: " 75%" }}
          >
            75%
          </div>
        </div> */}

        {grades.map((grade, index) => {
          return (
            <div key={index}>
              <p>{grade[1]}</p>
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
                Sep 29, 2014, 9:12 PM
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
                Sep 28, 2014, 10:15 PM
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

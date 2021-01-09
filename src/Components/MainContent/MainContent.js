import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        LinkEx
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function MainContent() {
  return (
    <div>
      <div className="w3-container">
        <h5>Ultimos Resultados</h5>
        <p>Calculo</p>
        <div className="w3-grey">
          <div
            className="w3-container w3-center w3-padding w3-blue"
            style={{ width: " 75%" }}
          >
            75%
          </div>
        </div>

        <p>Algoritmia</p>
        <div className="w3-grey">
          <div
            className="w3-container w3-center w3-padding w3-blue"
            style={{ width: "50%" }}
          >
            50%
          </div>
        </div>

        <p>Bases de datos</p>
        <div className="w3-grey">
          <div
            className="w3-container w3-center w3-padding w3-blue"
            style={{ width: "75%" }}
          >
            75%
          </div>
        </div>
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

      <footer
        style={{ height: "100%" }}
        className="w3-container w3-padding-16 w3-light-grey"
      >
        <Copyright></Copyright>
      </footer>
    </div>
  );
}

export default MainContent;

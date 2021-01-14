import React from "react";
import { useEffect } from "react";
import { PostData } from "../Services/PostData";

function Evaluations({ grades }) {
  return (
    <div id="Evaluations">
      <table className="w3-table-all">
        <thead>
          <tr className="w3-white">
            <th>Examen </th>
            <th>Tema</th>
            <th>Calificacion</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((exam, index) => {
            return (
              <tr className="w3-hover-green" key={index}>
                <td>{exam[0]}</td>
                <td>{exam[1]}</td>
                <td>{exam[2]}</td>
                <td>
                  {exam[3] ? (
                    <>
                      <button>Iniciar Examen</button>
                    </>
                  ) : exam[4] === "0" ? (
                    <>
                      <button className="w3-button w3-red w3-disabled w3-hover-red">
                        Reintentar examen
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="w3-button w3-black ">
                        Reintentar examen
                      </button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Evaluations;

import React, { useState, useEffect, useRef } from "react";
import { PostData } from "../Services/PostData";

function Evaluations({ userEmail, grades }) {
  const refContainer = useRef(null);
  const [examForm, setExamForm] = useState([]);
  const [idExamen, setExamID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = idExamen;
    const data = new FormData(refContainer.current);
    data.append("email", userEmail);
    data.append("id", id);
    let object = {};

    data.forEach((value, key) => (object[key] = value));
    object = JSON.stringify(object);
    closeExam();
    console.log(object);
    window.location.reload(false);
    evaluateExam(JSON.parse(object));
  };

  const evaluateExam = (object) => {
    console.log(object);
    PostData("evaluateExam", object).then((result) => {
      if (result) {
        console.log(result);
      }
    });
  };

  useEffect(() => {
    refContainer.current.focus();
  }, []);

  const closeExam = () => {
    document.getElementById("id01").style.display = "none";
  };

  const displayExam = (examid, e) => {
    e.preventDefault();
    let exam = { id: examid };
    getExam(exam);
  };

  const getExam = (exam) => {
    PostData("getExam", exam).then((result) => {
      if (result) {
        setExamID(exam.id);
        setExamForm(result.exam);
      }
    });
  };

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
          {grades.map((grade, index) => {
            return (
              <tr className="w3-hover-green" key={index}>
                <td>{grade[0]}</td>
                <td>{grade[1]}</td>
                <td>{(grade[2] / grade[5]) * 10}</td>
                <td>
                  {grade[3] ? (
                    <>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          displayExam(grade[6], e);
                          document.getElementById("id01").style.display =
                            "block";
                        }}
                        className="w3-button w3-light-blue"
                      >
                        Iniciar Examen
                      </button>
                    </>
                  ) : grade[4] === "0" ? (
                    <>
                      <button className="w3-button w3-red w3-disabled w3-hover-red">
                        Reintentar examen
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          displayExam(grade[6], e);
                          document.getElementById("id01").style.display =
                            "block";
                        }}
                        className="w3-button w3-black "
                      >
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

      <div id="id01" className="w3-modal">
        <div className="w3-modal-content w3-card-4">
          <header className="w3-container w3-blue">
            <span onClick={closeExam} className="w3-button w3-display-topright">
              x
            </span>
            <h2>Examen</h2>
          </header>
          <div className="w3-container w3-card-4">
            <form ref={refContainer} onSubmit={handleSubmit}>
              {examForm.map((exam, index) => {
                return (
                  <>
                    <div key={index}>
                      <h5>{exam[0]}</h5>
                      <p>
                        <input
                          className="w3-radio"
                          type="radio"
                          name={`ans${index}`}
                          value={`${exam[1]}`}
                          required
                        />
                        &nbsp;
                        <label>{exam[1]}</label>
                      </p>
                      <p>
                        <input
                          className="w3-radio"
                          type="radio"
                          name={`ans${index}`}
                          value={`${exam[2]}`}
                          required
                        />
                        &nbsp;
                        <label>{exam[2]}</label>
                      </p>
                      <p>
                        <input
                          className="w3-radio"
                          type="radio"
                          name={`ans${index}`}
                          value={`${exam[3]}`}
                          required
                        />
                        &nbsp;
                        <label>{exam[3]}</label>
                      </p>
                      <p>
                        <input
                          className="w3-radio"
                          type="radio"
                          name={`ans${index}`}
                          value={`${exam[4]}`}
                          required
                        />
                        &nbsp;
                        <label>{exam[4]}</label>
                      </p>
                    </div>
                  </>
                );
              })}
              <br></br>
              <p>
                <button type="submit" className="w3-btn w3-green">
                  Enviar
                </button>
              </p>
            </form>
          </div>
          <footer className="w3-container w3-blue">
            <p>LinkEx</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Evaluations;

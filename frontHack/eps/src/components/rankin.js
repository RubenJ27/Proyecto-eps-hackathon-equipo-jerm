import React, { useState, useEffect } from "react";
import img1 from "../assets/emoji-smile.svg";
import img2 from "../assets/emoji-neutral.svg";
import img3 from "../assets/emoji-frown.svg";

const Rankin = ({ socket }) => {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(1);
  const months = [
    "ENE",
    "FEB",
    "MAR",
    "ABR",
    "MAY",
    "JUN",
    "JUL",
    "AGO",
    "SEP",
    "OCT",
    "NOV",
    "DIC",
  ];
  const formatDate = (fecha) => {
    let date = new Date(fecha);
    let formatted_date =
      date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear();
    return formatted_date;
  };

  const pedido = async () => {
    try {
      const res = await fetch(`http://localhost:5000/eps/${change}`);
      const dataR = await res.json();
      setData(dataR);
      console.log(dataR);
    } catch (error) {
      // console.log(error);
      alert("Error Conect");
    }
  };

  useEffect(() => {
    // socket.onAny((eventName, ...args) => {
    //   console.log({
    //     eventName,
    //     args,
    //   });
    // });
    socket.on("Registrado", (usuarios) => {
      pedido();
      console.log("usuarios");
    });

    // eslint-disable-next-line
  }, [socket]);
  useEffect(() => {
    pedido();
    // eslint-disable-next-line
  }, [change]);

  return (
    <>
      <div className="col-8 mt-4">
        <div className="card h-100 mb-4">
          <div className="card-header pb-0 px-3">
            <div className="row">
              <div className="col-6">
                <h6 className="mb-0">Tiempo de respuesta</h6>
              </div>
              <div className="col-6 d-flex justify-content-end align-items-center">
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    onClick={() => setChange(1)}
                    className="btn btn-success"
                  >
                    <img src={img1} alt="" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setChange(2)}
                    className="btn btn-warning"
                  >
                    {" "}
                    <img src={img2} alt="" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setChange(3)}
                    className="btn btn-danger"
                  >
                    {" "}
                    <img src={img3} alt="" />
                  </button>
                </div>
                {/* <i className="far fa-calendar-alt me-2" />
                <small>23 - 30 March 2020</small> */}
              </div>
            </div>
          </div>
          <div className="card-body pt-4 p-3">
            <h6 className="text-uppercase text-body text-xs font-weight-bolder mb-3">
              Tiempo Real
            </h6>
            <ul className="list-group">
              {data.map((dt) => {
                return (
                  <li
                    key={dt.ideps}
                    className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
                  >
                    <div className="d-flex align-items-center">
                      <button
                        className={`btn btn-icon-only btn-rounded ${
                          Math.round(dt.resultado) > 2
                            ? "btn-outline-danger"
                            : "btn-outline-success"
                        } mb-0 me-3 btn-sm d-flex align-items-center justify-content-center`}
                      >
                        {Math.round(dt.resultado) > 2 ? (
                          <i className="fas fa-arrow-down" />
                        ) : (
                          <i className="fas fa-arrow-up" />
                        )}
                      </button>
                      <div className="d-flex flex-column ">
                        <h6 className="mb-1  text-start text-dark text-sm">
                          {dt.eps}
                        </h6>
                        <span style={{}} className="text-start text-xs">
                          {formatDate(dt.fecha_corte)}
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center text-dark text-gradient text-sm font-weight-bold">
                      {"Teimpo de espera " + Math.round(dt.resultado) + "dias"}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Rankin;

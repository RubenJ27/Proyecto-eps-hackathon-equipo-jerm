import trickImg from "../assets/trick-treat5-img.png";
import Portada from "../portada";
import { Routes, Route, Link } from "react-router-dom";
import Tabla from "./tabla";
import Formulario from "./formu";
import Rankin from "./rankin";
import io from "socket.io-client";
import DataTabla from "./DataTable";
const socket = io("http://localhost:5000/");
const Headers = () => {
  return (
    <>
      <div className="card shadow-lg mx-4 fixed-top mt-2">
        <div className="card-body p-1">
          <div className="row gx-4">
            <div className="col-auto">
              <div className="avatar avatar-xl position-relative">
                <img src={trickImg} alt="" className="nav__logo-img" />
              </div>
            </div>
            <div className="col-auto my-auto">
              <div className="h-100">
                <h5 className="mb-1">RANKIN</h5>
                <p className="mb-0 font-weight-bold text-sm">EQUIPO JERM</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
              <div className="nav-wrapper position-relative end-0">
                <ul className="nav nav-pills nav-fill p-1" role="tablist">
                  <li className="nav-item">
                    <Link
                      className="nav-link mb-0 px-0 py-1 active d-flex align-items-center justify-content-center "
                      data-bs-toggle="tab"
                      to="/"
                      role="tab"
                      aria-selected="true"
                    >
                      <i className="ni ni-app" />
                      <span className="ms-2">Home</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center "
                      data-bs-toggle="tab"
                      to="/form"
                      role="tab"
                      aria-selected="false"
                    >
                      <i className="ni ni-email-83" />
                      <span className="ms-2">Registro Eps</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center "
                      data-bs-toggle="tab"
                      to="/datos"
                      role="tab"
                      aria-selected="false"
                    >
                      <i className="ni ni-settings-gear-65" />
                      <span className="ms-2">Datos Eps</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <Portada />
                  </div>
                  <div className="col-12 d-flex justify-content-center mt-4">
                    <Rankin socket={socket} />
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route path="/tabla" element={<Tabla />} />
        <Route path="/form" element={<Formulario socket={socket} />} />
        <Route path="/datos" element={<DataTabla socket={socket} />} />
      </Routes>
    </>
  );
};
export default Headers;

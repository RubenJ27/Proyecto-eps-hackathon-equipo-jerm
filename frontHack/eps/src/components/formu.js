import React, { useState } from "react";
const Formulario = ({ socket }) => {
  const [datos, setDatos] = useState([]);
  const cambio = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };
  const env = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/eps`, {
      method: "POST",
      body: "hola",
    });
    const data = await res.json();
    console.log(data);
    socket.emit("Registro", { name: "John" });
  };
  return (
    <>
      <div
        style={{
          marginTop: "5em",
        }}
        className="container-fluid py-4"
      >
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex align-items-center">
                  <p className="mb-0">Agregar Eps</p>
                  <button
                    onClick={env}
                    className="btn btn-primary btn-sm ms-auto"
                  >
                    Add
                  </button>
                </div>
              </div>
              <div className="card-body">
                <p className="text-uppercase text-sm">Information</p>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        Eps
                      </label>
                      <input
                        onChange={cambio}
                        className="form-control"
                        type="text"
                        name="eps"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        Categoria
                      </label>
                      <input
                        onChange={cambio}
                        className="form-control"
                        type="text"
                        name="nomcategorias"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        Servicio
                      </label>
                      <input
                        onChange={cambio}
                        className="form-control"
                        type="text"
                        name="nomservicio"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        Nombre Especifico
                      </label>
                      <input
                        onChange={cambio}
                        className="form-control"
                        type="text"
                        name="nomespecifique"
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        Tiempo de respuesta
                      </label>
                      <input
                        onChange={cambio}
                        className="form-control"
                        type="text"
                        name="tiempo de respuesta"
                      />
                    </div>
                  </div>
                </div>
                {/* <hr className="horizontal dark" />
                <p className="text-uppercase text-sm">Contact Information</p>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        Address
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        City
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="New York"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        Country
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="United States"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        Postal code
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={437300}
                      />
                    </div>
                  </div>
                </div>
                <hr className="horizontal dark" />
                <p className="text-uppercase text-sm">About me</p>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        About me
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="A beautiful Dashboard for Bootstrap 5. It is Free and Open Source."
                      />
                    </div>
                  </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Formulario;

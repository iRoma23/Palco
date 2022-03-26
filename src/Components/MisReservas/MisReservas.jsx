import { Button } from "bootstrap";
import React from "react";

import imagen from "../../Assets/images/dueñopalco.jpg";
import NavbarCliente from "../Navbar/NavbarCliente/NavbarCliente";
const MisReservas = () => {
  return (
    <>
      <NavbarCliente />
      <div className="m-3">
        <h1>Mis Reservas</h1>
        <div className=" card-body">
          <h2>Activas</h2>
          <div className="card mb-3 ">
            <div className="row g-0 d-flex flex-row justify-content-around">
              <div className="col-md-4 ">
                <img
                  src={imagen}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8 d-flex flex-row justify-content-end align-items-center p-4">
                <div className="card-body ">
                  <h3 className="card-title">Estadio Nacional</h3>
                  <h5 className="card-title">Palco Nro 201 Oriente</h5>
                  <h5 className="card-title">Alianza vs Cristal</h5>
                  <p className="card-text">
                    <small className="text-muted">24 de marzo 2022</small>
                  </p>
                </div>
                <div className="card-body">
                  <h1 className="card-title">s/ 1200.00</h1>
                </div>
                <div className="card-body d-flex flex-column ">
                  <button className="card-title btn btn-primary">Ver</button>
                  <button className="card-title btn btn-danger">
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" card-body">
            <h2>Historial</h2>
            <div className="card mb-3 ">
              <div className="row g-0 d-flex flex-row justify-content-around">
                <div className="col-md-4 ">
                  <img
                    src={imagen}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8 d-flex flex-row justify-content-end align-items-center p-4">
                  <div className="card-body ">
                    <h3 className="card-title">Estadio Nacional</h3>
                    <h5 className="card-title">Palco Nro 201 Oriente</h5>
                    <h5 className="card-title">Alianza vs Cristal</h5>
                    <p className="card-text">
                      <small className="text-muted">24 de marzo 2022</small>
                    </p>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title">s/ 1200.00</h1>
                  </div>
                  <div className="card-body d-flex flex-column ">
                    <button className="card-title btn btn-primary">Ver</button>
                    <button className="card-title btn btn-danger">
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 ">
              <div className="row g-0 d-flex flex-row justify-content-around">
                <div className="col-md-4 ">
                  <img
                    src={imagen}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8 d-flex flex-row justify-content-end align-items-center p-4">
                  <div className="card-body ">
                    <h3 className="card-title">Estadio Nacional</h3>
                    <h5 className="card-title">Palco Nro 201 Oriente</h5>
                    <h5 className="card-title">Alianza vs Cristal</h5>
                    <p className="card-text">
                      <small className="text-muted">24 de marzo 2022</small>
                    </p>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title">s/ 1200.00</h1>
                  </div>
                  <div className="card-body d-flex flex-column ">
                    <button className="card-title btn btn-primary">Ver</button>
                    <button className="card-title btn btn-danger">
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MisReservas;

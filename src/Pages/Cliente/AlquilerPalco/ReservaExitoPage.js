import React from "react";
import { Link } from "react-router-dom";
import palco from "./img/zonapalco.jpg";

const ReservaExitoPage = () => {
  return (
    <>
      {/* <NavbarVisit /> */}
      <div className="card-body">
        <h3 className="text-muted p-1 text-center">
          HAS REALIZADO EXITOSAMENTE TU RESERVA!!!
        </h3>
      </div>
      <div className="card">
        <div className="card-body row g-0">
          <div className=" card-body col-md-6 ">
            <div className="text-center">
              <h3 className="card-title">UBICACION DEL PALCO</h3>
            </div>
            <img
              src={palco}
              className="img-fluid rounded img-thumbnail"
              alt="Imagen Estadio"
            />
          </div>

          {/* aca va el formlario */}
          <div className=" col-md-6">
            <div className="card-body">
              <h3 className="text-center">DATOS DE TU RESERVA</h3>
            </div>
            <div className="card-body">
              <ul>
                <li>Nombres del Cliente:</li>
                <li>Cantidad de personas</li>
                <li>Zona del Palco</li>
                <li>Nombre del Evento</li>
                <li>Fecha del Evento</li>
                <li>Estadio</li>
              </ul>
            </div>
            <div className="card p-3">
              <div className=" gap-2 d-md-flex justify-content-md-end mt-2">
                
                <Link
                  type="button"
                  class="btn btn-primary "
                  to="/home-propietario"
                >
                  Volver al Menú Principal
                </Link>
              </div>
              {/* Aca va los checkbox */}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservaExitoPage;

import React from "react";
import { Link } from "react-router-dom";
import palco from "./img/palco1.jpg";

const RegistroPalcoPage = () => {
  return (
    <>
      {/* <NavbarVisit /> */}
      <div className="card-body">
        <h3 className="text-muted p-1 text-center">
          HAS REGISTRADO EXITOSAMENTE TU PALCO!!!
        </h3>
      </div>
      <div className="card">
        <div className="card-body row g-0">
          <div className=" card-body col-md-6 ">
            <div className="text-center">
              <h3 className="card-title">IMAGEN DEL PALCO</h3>
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
              <h3 className="text-center">DATOS DE TU PROPIEDAD</h3>
            </div>
            <div className="card-body">
              <ul>
                <li>Nombres del Propietario:</li>
                <li>Correo</li>
                <li>DNI</li>
                <li>Titulo de Propiedad</li>
                <li>Numero de Palco</li>
                <li>Estadio</li>
                <li>Zona</li>
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

export default RegistroPalcoPage;

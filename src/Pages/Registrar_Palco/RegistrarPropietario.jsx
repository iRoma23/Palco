import React from "react";
import { Link } from "react-router-dom";



const RegistrarPropietario = () => {
  return (
    <>
      <div className="card-body m-5 p-0">
        <h1 className="card-title">Datos del Propietario</h1>
      </div>
      <div className="col-md-6 m-5 p-0">
        <form className="row-6 g-3 card-body">
          <div className="row-6">
            <label for="inputName" className="form-label">
              Nombres
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="ronald"
            />
          </div>
          <div className="row-6">
            <label for="input-last-name" className="form-label">
              Apellidos
            </label>
            <input
              type="text"
              className="form-control"
              id="input-last-name"
              placeholder="zanga"
            />
          </div>
          <div className="row-6">
            <label for="inputDni" className="form-label">
              Dni
            </label>
            <input
              type="text"
              className="form-control"
              id="inputDni"
              placeholder="dni"
            />
          </div>
          <div className="row-6">
            <label for="inputAddress" className="form-label">
              Direccion
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="tacna, tacna, gregorio albarracin"
            />
          </div>
          <div className="row-6 mb-3">
            <label for="inputCity" className="form-label">
              Ciudad
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              placeholder="tacna-peru"
            />
          </div>

          <div className="row-6">
            <Link
              className="btn btn-primary"
              type="submit"
              to="/palco"
            >Siguiente</Link>
            
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrarPropietario;

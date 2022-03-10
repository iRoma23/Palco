import React from "react";

const RegistrarPalco = () => {
  return (
    <>
      <div className="card-body">
        <h1 className="card-title">Datos del Propietario</h1>
      </div>
      <div className="card-body ">
        <form className="row-12 g-3 card-body principal">
          <div className="row-12">
            <label for="inputName" className="form-label">
              Nombres
            </label>
            <input type="text" className="form-control" id="inputName" placeholder="ronald"/>
          </div>
          <div className="row-12">
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
          <div className="row-12">
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
          <div className="row-12">
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
          <div className="row-12">
            <label for="inputCity" className="form-label">
              Ciudad
            </label>
            <input type="text" className="form-control" id="inputCity" placeholder="tacna-peru" />
          </div>

        
          <div className="row-12 p-3">
            <button type="submit" className="btn btn-primary">
              Siguiente
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrarPalco;

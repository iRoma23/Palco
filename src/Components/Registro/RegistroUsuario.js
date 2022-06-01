import React from "react";
import { Link } from "react-router-dom";
import "./registro.css"

const RegistroUsuario = () => {
  return (
    <>
      <form className="fondo1" action="#">
        <div className="container">
          <div className="fondo col-md-5 p-2 rounded">
            <div className="text-center tittle">
              <h2 className="fw-bold">Registro de usuario</h2>
            </div>
            <div className="col-md-12 mb-2">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-12 mb-2">
              <label for="username" className="form-label">
                Username
              </label>
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="col-md-12 mb-2">
              <label for="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
              />
            </div>
            <div className="col-12 mb-2">
              <label for="inputAddress" className="form-label">
                Nombres Completos
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Ej. Romario Jara"
              />
            </div>
            <div className="col-md-9 mb-2">
              <label for="" className="form-label">
                Telefono Móvil
              </label>
              <input
                type="number"
                class="form-control"
                id=""
                placeholder=""
              />
            </div>
            
            <div className="col-12 mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Acepto los Términos y condiciones
                </label>
              </div>
            </div>
            <div className="col-12 text-center">
              <Link to="/login" type="submit" className="btn btn-primary btn-lg">
                Registrar
              </Link>
            </div>
            <div className="color-text">
              <Link className="text-reset" to="/login">Ya tengo una cuenta</Link>
            </div>
          </div>
        </div>
      </form>

    </>

  );
};

export default RegistroUsuario;

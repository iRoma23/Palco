import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
import NavbarVisit from "../Navbar/NavbarVisitante/NavbarVisit";
>>>>>>> a886836999c89eb07e9f490bd005e6e3cd4ba8da

const RegistroUsuario = () => {
  return (
    <>
<<<<<<< HEAD
    <div className="container">
    <form  action="#">
      <div className="col">
        <div className=" text-center">
            <div className="col-12 pb-4 fs-5">Registro de usuario</div>
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12">
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
        <div className="col-12">
          <label for="inputAddress2" className="form-label">
            Telefono Móvil
          </label>
          <input
            type="number"
            class="form-control"
            id="movil"
            placeholder=""
          />
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            Ciudad
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">
            Pais
          </label>
          <select id="inputState" className="form-select">
            <option selected>Perú</option>
            <option>Argentina</option>
            <option>Ecuador</option>
            <option>Chile</option>
          </select>
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
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
        <div className="col-12">
        <Link
            className="btn btn-primary"
            type="submit"
            to="/visitante"
          >Registrar</Link>
        </div>
      </div>
    </form>
    </div>
    </>
   
=======
    <div>
      <NavbarVisit />
    </div>
      <form className="" action="#">
        <div className="container">
          <div className="col-md-6 p-2 border border-secondary border-2 rounded">
            <div className="text-center">
              <h3>Registro de usuario</h3>
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
              />
            </div>
            <div className="col-12">
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
            <div className="col-md-6">
              <label for="movil2" className="form-label">
                Telefono Móvil
              </label>
              <input
                type="number"
                class="form-control"
                id="movil2"
                placeholder=""
              />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">
                Pais
              </label>
              <select id="inputState" className="form-select">
                <option selected>Perú</option>
                <option>Argentina</option>
                <option>Ecuador</option>
                <option>Uruguay</option>
                <option>Chile</option>
                <option>Bolivia</option>
                <option>Brasil</option>
              </select>
            </div>
            <div className="col-12">
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
              <button type="submit" className="btn btn-primary rounded-pill btn-lg">
                Registrar
              </button>
            </div>
            <div className="form-text mb-3">
              <Link to="/login">Ya tengo una cuenta</Link>
            </div>
          </div>
        </div>
      </form>

    </>

>>>>>>> a886836999c89eb07e9f490bd005e6e3cd4ba8da
  );
};

export default RegistroUsuario;

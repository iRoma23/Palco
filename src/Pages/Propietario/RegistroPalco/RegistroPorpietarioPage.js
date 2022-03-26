import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import NavbarVisit from '../../../Components/Navbar/NavbarVisitante/NavbarVisit'
import img1 from './img/palco1.jpg'

const RegistroPorpietarioPage = () => {

  return (
    <>
      {/* <NavbarVisit /> */}
      <div className='card p-4 '>
        <form className=" col-md-10 d-flex flex-direction-column justify-content-center" action="#">

          <div className="col-md-6 border border-secondary rounded p-3">
            <div className="text-center">
              <h2>Registro de Propietario</h2>
            </div>
            <div className="col-md-12 p-1">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-12">
              <label for="inputPassword4" className="form-label">
                Nombres
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder='Nombres'
              />
            </div>
            <div className="col-12 p-1">
              <label for="inputAddress" className="form-label">
                Apellidos
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Apellidos"
              />
            </div>
            <div className="col-6 p-1">
              <label for="inputAddress" className="form-label">
                Dni
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Dni"
              />
            </div>
            <div className="col-md-6 p-1">
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
            <div className="col-md-4 p-1">
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

            <div className="col-md-4 p-1">
              <label for="inputState" className="form-label">
                Ciudad
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Ciudad"
              />
            </div>
            <div className="col-12 p-2">
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
              <Link to="/registro_palco" type="submit" className="btn btn-primary m-2">
                Siguiente
              </Link>
            </div>
            <div className="form-text mb-3">
              <Link to="/">Ya tengo una cuenta</Link>
            </div>
          </div>

        </form>

      </div>

    </>

  )
}

export default RegistroPorpietarioPage
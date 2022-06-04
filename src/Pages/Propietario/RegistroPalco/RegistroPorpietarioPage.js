import React from 'react'
import { Link } from 'react-router-dom'
import NavbarVisit from '../../../Components/Navbar/NavbarVisitante/NavbarVisit'
import logof from "./img/logo-facebook.png";
import logog from "./img/logo-google.png";

const RegistroPorpietarioPage = () => {

  return (
    <>
<<<<<<< HEAD
      <div className='card p-4 d-flex align-items-center'>
        <form className=" col-md-10 d-flex flex-direction-column justify-content-center" action="#">
=======
      <form action="#">
        <div className="container">
          <div className="col-sm-5 border border-secondary border-2 rounded p-3">
            <div className="text-center pb-2">
              <h3>Registrar Propietario</h3>
>>>>>>> 9dabf1be6ce5930185498ccbd2e9beed04a6e61b

            </div>
            <div className="col justify-content-center">
              <div className="col text-center">
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 my-1"
                >
                  <div className="row align-items-center">
                    <div className="col-2 d-md-block">
                      <img src={logof} width="30" alt="F" />
                    </div>
                    <div className="col text-center">Sign in with Facebook</div>
                  </div>
                </button>
              </div>
              <div className="col text-center">
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 my-1"
                >
                  <div className="row align-items-center">
                    <div className="col-2 d-md-block">
                      <img src={logog} width="30" alt="G" />
                    </div>
                    <div className="col text-center">Sign in with Google</div>
                  </div>
                </button>
              </div>
            </div>


            <div className="text-center mb-3">or</div>
            <div className="mb-3">
              <div className="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Correo Electronico"
                // value = {email}

                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Nombres"
                // value = {password} 

                />
              </div>

              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Apellidos"
                // value = {password} 

                />
              </div>

              <div class="mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Dni"
                // value = {password} 

                />
              </div>

              <div class="mb-3">
                <select id="inputState" className="form-select">
                  <option selected>Pais</option>
                  <option>Peru</option>
                  <option>Ecuador</option>
                  <option>Uruguay</option>
                  <option>Chile</option>
                  <option>Bolivia</option>
                  <option>Brasil</option>
                </select>
              </div>

              <div class="mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Ciudad"
                // value = {password} 

                />
              </div>

              <div class="mb-3 form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Acepto los Términos y condiciones
                </label>
              </div>

              
              <div className="text-center">
                <Link to="/registro_palco" type="submit" className="btn btn-primary btn-lg">
                  Registrar
                </Link>
              </div>
              {/* <div className="row text-center">
                <div id="emailHelp" className="form-text mb-3 col">
                  ¿No tienes una cuenta?
                </div>
                <div id="emailHelp" className="form-text mb-3 col">
                  <Link to="#">Registrate aquí</Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </form>


    </>

  )
}

export default RegistroPorpietarioPage

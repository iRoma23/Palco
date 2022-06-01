import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import imgregistro from '../../../Assets/images/registropalco.jpg'
import './style.css'

const RegistroPorpietarioPage = () => {

  return (
    <>
      <form action="#" className='formulario '>
        <div className="container ">
            <div className="col-sm-6">
            <div className="text-center pb-2">
              <h3>Registrar Propietario</h3>
            </div>
            <div className="mb-3">
              <div className="mb-3">
                <input
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Correo Electronico"
                // value = {email}

                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nombres"
                // value = {password} 

                />
              </div>

              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Apellidos"
                // value = {password} 

                />
              </div>

              <div class="mb-3">
                <input
                  type=""
                  class="form-control"
                  placeholder="Dni"
                // value = {password} 

                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Titulo de Propiedad"
                // value = {password} 

                />
              </div>

              <div class="mb-3 form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label color-text bold" for="gridCheck">
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
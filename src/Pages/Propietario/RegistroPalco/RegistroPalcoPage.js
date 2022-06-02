import React from 'react'
import { Link } from 'react-router-dom'
import palco from './img/palco.jpg'

const RegistroPalcoPage = () => {
  return (
    <>
      {/* <NavbarVisit /> */}
      <div className="card-body">
        <h3 className="text-muted p-1 text-center">
          INGRESA LOS DATOS Y UBICACIÓN DE TU PALCO
        </h3>
      </div>
      <div className="card">
        <div className="card-body row g-0">
          <div className=" card-body col-md-6 ">
            <div className="text-center">
              <h3 className="card-title">ESTADIO NACIONAL</h3>
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
              <h3 className="text-center">REGISTRA TU PALCO</h3>
            </div>
            <div className="card p-3">
              <div className="">
                <select
                  class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Seleccione Estadio</option>
                  <option value="1">Estadio Nacional</option>
                  <option value="2">Estadio Monumental</option>
                  <option value="3">Monumental UNSA</option>
                  <option value="4">Alejandro Villanueva</option>
                  <option value="5">Inca Garcilazo de la Vega</option>
                  <option value="6">Estadio Mansiche</option>
                </select>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Numero de Palco"
                />
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Detalle"
                />
              </div>
              {/* Aca va los checkbox */}
              <div className="card-body">
                <div class="form-check ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Zona Norte
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Zona Oriente
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Zona Poniente
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Zona Sur
                  </label>
                </div>
                {/* Aca va el Boton */}
                <div className=" gap-2 d-md-flex justify-content-md-end mt-2">
                  <Link type="button" class="btn btn-primary" to="/registro_propietario">
                    Atras
                  </Link>
                  <Link type="button" class="btn btn-primary " to="/registro_exitoso">
                    Registrar
                  </Link>

                </div>
                <p className="text-center ">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default RegistroPalcoPage
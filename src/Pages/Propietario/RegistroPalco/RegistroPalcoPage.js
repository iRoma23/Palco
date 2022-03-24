import React from 'react'
import { Link } from 'react-router-dom'
import palco from './img/palco.jpg'

const RegistroPalcoPage = () => {
  return (
    <div>
      <div className="container p-2">
        <h3 className="text-muted mt-2 mb-3">
          RENTA TU PALCO PARA LOS MEJORES PARTIDOS DE LA LIGA I - 2022
        </h3>
      </div>
      <div className="container">
        <div className="card-body row g-0">
          <div className=" card-body col-md-6 ">
            <div className="text-center">
              <h3 className="card-title">ESTADIO NACIONAL</h3>
            </div>
            <img
              src={palco}
              className="img-fluid rounded img-thumbnail"
              height="100%"
              alt="Imagen Estadio"
            />
          </div>

          {/* aca va el formlario */}
          <div className=" col-md-6">
            <div className="card-body">
              <h3 className="text-center">REGISTRA TU PALCO</h3>
            </div>
            <div className="container">
              <div className="container">
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
                  placeholder="Numero o Nombre"
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
                    Zona Norte
                  </label>
                </div>
                {/* Aca va el Boton */}
                <div className=" gap-2 d-md-flex justify-content-md-end mt-2">
                  <Link type="button" class="btn btn-primary" to="/registro_propietario">
                    Atras
                  </Link>
                  <Link type="button" class="btn btn-primary " to="/registro_foto">
                    Siguiente
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-3">
          <p className="text-center ">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegistroPalcoPage
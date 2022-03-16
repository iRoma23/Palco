import React from 'react'
import { Link } from 'react-router-dom'

const RegistroPorpietarioPage = () => {
  return (
    <div className='container d-flex flex-column align-items-center'>
      <div className="card-body mt-2">
        <h1 className="card-title">Datos del Propietario</h1>
      </div>
      <div className="col-6 card-body border">
        <form className="card-body">
          <div className="row-6">
            <label for="inputName" className="form-label">
              Nombres
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="..."
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
              placeholder="..."
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
              placeholder="..."
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

        </form>
        <div className="row-6 gap-2 d-md-flex justify-content-md-end mt-2" >
          <Link
            className="btn btn-primary"
            type="submit"
            to="/registro_palco"
          >Siguiente</Link>

        </div>
      </div>

    </div>
  )
}

export default RegistroPorpietarioPage
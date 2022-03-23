import React from 'react'
import { Link } from 'react-router-dom'
import Carrusel from '../../../Components/Carrusel/Carrusel'

import portada from './img/palco.jpg'

const RegistroFotoPage = () => {

  const images = ['01.jpg', '02.jpg', '03.jpg'];
  return (
    <div className='container d-flex flex-column align-items-center'>

      <Carrusel images={images} autoplay={true} />

      <div className="card-body w-50" >

        <p className="fw-bold mt mb-3">
          Sube al menos 1 fotografía del palco
        </p>
        <h5 class="card-title">Subir fotos</h5>
        <input
          type="file"
          class="form-control-file"
          id="exampleFormControlFile1"
        />
        {/* Aca va el Boton */}
        <div className=" gap-2 d-md-flex justify-content-md-end mt-2">
          <Link type="button" className="btn btn-primary" to="/registro_palco">
            Atras
          </Link>
          <Link type="button" className="btn btn-primary " to="/registro_propietario">
            Finalizar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegistroFotoPage
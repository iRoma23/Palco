import React from 'react'
import { Link } from 'react-router-dom'

const CardEvento = ({ titulo, fecha, img, id }) => {
  return (
    <div className="col-12 col-md-4 ">
      <div className="contenedor shadow">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">Fecha: {fecha}</p>
        </div>
        <div className="card-footer d-flex flex-row justify-content-center">
          <Link to={`/info-evento/${id}`} className='btn btn-outline-dark'>Ver Palco</Link>
        </div>
      </div>
    </div>
  )
}

export default CardEvento
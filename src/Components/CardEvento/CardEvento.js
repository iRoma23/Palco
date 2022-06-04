import React from 'react'

const CardEvento = ({ handleClick, titulo, fecha, img }) => {
  return (
    <div className="col-12 col-md-4 ">
      <div className="contenedor shadow">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">Fecha: {fecha}</p>
        </div>
        <div className="card-footer d-flex flex-row justify-content-center">
          <button className='btn btn-outline-dark' onClick={handleClick}>Ver Palco</button>
        </div>
      </div>
    </div>
  )
}

export default CardEvento
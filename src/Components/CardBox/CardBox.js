import React from 'react'

const CardBox = ( {image, addReserva, price, desciption, boxnumber, zone} ) => {
  return (
    <div className="row align-items-center border-top mb-3">
      <div className="col-md-3">
        <img src={image} className="card-img-top" alt="..." />
      </div>
      <div className="col-md-3">
        <div className="ul ">
          <h5 className="">Palco: {boxnumber}</h5>
          <p className="">Zona: {zone}</p>
          <p className="">Descripcion: {desciption}</p>
        </div>
      </div>
      <div className=" col text-center">
        <h5 className="border bg-info p-1">S/ 100 {price}</h5>
      </div>
      <div className=" col text-center">
        <button 
          className="btn btn-primary btn-lg rounded-pill"
          onClick={addReserva}
        >
          Reservar
        </button>
      </div>
    </div>
  )
}

export default CardBox
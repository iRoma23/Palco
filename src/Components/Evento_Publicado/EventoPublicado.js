import React from 'react'
import { NavLink } from 'react-router-dom'

const EventoPublicado = () => {
  return (
    <div className='row align-items-center justify-content-center pt-3'>
      <div className='col-3 col-sm-2 d-flex flex-column align-items-center'>
        <span className='fw-bold'>Fecha:</span>
        {/* base de datos */}
        <span>14/01</span>
      </div>
      <div className='col-5 col-sm-5'>
        {/* base de datos */}
        <NavLink to="/publicado"><img className='img-fluid' src={require(`../../Assets/images/carrusel1.jpg`)} /></NavLink>
      </div>
      <div className='col-3 col-sm-2 d-flex flex-column align-items-center'>
        <span className='fw-bold'>Estado:</span>
        {/* base de datos */}
        <span>Reservado</span>
      </div>
    </div>
  )
}

export default EventoPublicado
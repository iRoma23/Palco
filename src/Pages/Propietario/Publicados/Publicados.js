import React from 'react'
import EventoPublicado from '../../../Components/Evento_Publicado/EventoPublicado'


const Publicados = () => {
  return (
    <div className='container mt-3'>
      <div className='row justify-content-center'>
        <div className='col-11 col-sm-9'>
          <h3>Publicados</h3>
        </div>
      </div>
      <EventoPublicado />
      <EventoPublicado />
      <EventoPublicado />
    </div>
  )
}

export default Publicados
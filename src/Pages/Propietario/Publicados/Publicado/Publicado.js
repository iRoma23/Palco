import React from 'react'
import Informacion from '../../../../Components/Informacion/Informacion'

const Publicado = () => {

  return (

    <div className='container'>
      <Informacion  disabled={true}/>
      <div className='d-flex justify-content-center'>
        <button className='btn btn-primary'>Deja de Publicar</button>
      </div>
      
    </div>
  )
}

export default Publicado
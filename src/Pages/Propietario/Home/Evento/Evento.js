import React from 'react'
import Descripcion from '../../../../Components/Descripcion/Descripcion';
import Informacion from '../../../../Components/Informacion/Informacion';

const Evento = () => {
  return (
    <>
      <Informacion disabled={false} />
      <Descripcion />
    </>
  )
}

export default Evento
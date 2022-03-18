import React from 'react'
import Descripcion from '../../../../Components/Descripcion/Descripcion';
import Informacion from '../../../../Components/Informacion/Informacion';
import Navbar from '../../../../Components/Navbar/Navbar';
import Footer from '../../../../Components/Footer/Footer'

const Evento = () => {
  return (
    <>
      <Navbar />
      <Informacion />
      <Descripcion />
      <Footer />
    </>
  )
}

export default Evento
import React from 'react'
import Carrusel from '../../../Components/Carrusel/Carrusel'
import Footer from '../../../Components/Footer/Footer'
import Navbar from '../../../Components/Navbar/Navbar'

const PropietarioHome = () => {
  const images = ['01.jpg', '02.jpg', '03.jpg'];

  return (
    <>
      
      <Carrusel images={images} autoplay ={true} title={"Populares"}/>
      <Carrusel images={images} title={"Proximos"}/>
      
    </>
  )
}

export default PropietarioHome;
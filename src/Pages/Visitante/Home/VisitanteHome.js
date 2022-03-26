import React from 'react'
import Cardspalco from '../../../Components/CardsPalco/Cardspalco'
import Carrusel from '../../../Components/Carrusel/Carrusel'
import Footer from '../../../Components/Footer/Footer'
import NukaCar from '../../../Components/NukaCar/NukaCar'
import NavbarVisit from '../../../Components/Navbar/NavbarVisitante/NavbarVisit'

const VisitanteHome = () => {
  const images = ['01.jpg', '02.jpg', '03.jpg'];
  return (
    <>
     {/* <NavbarVisit /> */}
     <NukaCar />
     <Cardspalco />
     {/* <Footer /> */}
    </>
  )
}

export default VisitanteHome
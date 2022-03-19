import React from 'react'
import Carrusel from '../../../Components/Carrusel/Carrusel'
import Footer from '../../../Components/Footer/Footer'
import Infohome from '../../../Components/InfoHome/Infohome'
import NavbarVisit from '../../../Components/Navbar/NavbarVisitante/NavbarVisit'


const VisitanteHome = () => {
  const images = ['01.jpg', '02.jpg', '03.jpg'];
  return (
    <>
     <NavbarVisit />
     <Carrusel images={images} autoplay={true} />
     <Infohome />
     <Footer />
    </>
  )
}

export default VisitanteHome
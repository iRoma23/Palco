import React from 'react'
import Cardspalco from '../../../Components/CardsPalco/Cardspalco'
import Carrusel from '../../../Components/Carrusel/Carrusel'
import Footer from '../../../Components/Footer/Footer'
import NavbarCliente from '../../../Components/Navbar/NavbarCliente/NavbarCliente'

const ClienteHome = () => {
    const images = ['01.jpg', '02.jpg', '03.jpg'];
  return (
      <>
        {/* <NavbarCliente /> */}
        <Carrusel images={images} autoplay={true} />
        <Cardspalco />
        <Footer />
      </>
    
  )
}

export default ClienteHome
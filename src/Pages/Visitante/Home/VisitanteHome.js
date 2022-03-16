import React from 'react'
import Footer from '../../../Components/Footer/Footer'
import Navbar from '../../../Components/Navbar/Navbar'
import RegistroUsuario from '../../../Components/Registro/RegistroUsuario'
import { SignIn } from '../../../Components/Sign_in/SignIn'

const VisitanteHome = () => {
  return (
    <>
        <Navbar />
        <SignIn />
        <RegistroUsuario />
        <Footer />
    </>
  )
}

export default VisitanteHome
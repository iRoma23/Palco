import React from 'react'
import Footer from '../../../Components/Footer/Footer'
import NavbarVisit from '../../../Components/Navbar/NavbarVisitante/NavbarVisit'
import { SignIn } from '../../../Components/Sign_in/SignIn'

const VisitanteSignIn = () => {
  return (
    <>
      <NavbarVisit />
      <SignIn />
      <Footer />
    </>
  )
}

export default VisitanteSignIn
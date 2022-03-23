import React from 'react'
import Footer from '../../../Components/Footer/Footer'
import NavbarVisit from '../../../Components/Navbar/NavbarVisitante/NavbarVisit'
import { SignIn } from '../../../Components/Sign_in/SignIn'
import { SignIn2 } from '../../../Components/Sign_in/SignIn2'

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
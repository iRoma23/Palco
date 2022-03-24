import { Routes, Route } from "react-router-dom";
import "./App.css";
import TodoEventos from "./Components/Evento_Publicado/TodoEventos";

import Footer from "./Components/Footer/Footer";
<<<<<<< HEAD
import Infohome from "./Components/InfoHome/Infohome";
// import Navbar from "./Components/Navbar/Navbar";
import Nosotros from "./Components/Nosotros/Nosotros";
// import RegistroUsuario from "./Components/Registro/RegistroUsuario";
// import SignIn from "./Components/Sign_in/SignIn";

// import ClienteHome from "./Pages/Cliente/Home/ClienteHome";
import NavbarCliente from "./Pages/Cliente/Navbar/NavbarCliente";
=======
import ModalResarva from "./Components/Modal/ModalResarva";
import Navbar from "./Components/Navbar/Navbar";
import NavbarVisit from "./Components/Navbar/NavbarVisitante/NavbarVisit";
import Nosotros from "./Components/Nosotros/Nosotros";
import RegistroUsuario from "./Components/Registro/RegistroUsuario";
>>>>>>> a886836999c89eb07e9f490bd005e6e3cd4ba8da
import NotFoundPages from "./Pages/not_found_404/NotFoundPages";
import Evento from "./Pages/Propietario/Home/Evento/Evento";
// import PropietarioHome from "./Pages/Propietario/Home/PropietarioHome";
import Publicado from "./Pages/Propietario/Publicados/Publicado/Publicado";
import Publicados from "./Pages/Propietario/Publicados/Publicados";
import RegistroFotoPage from "./Pages/Propietario/RegistroPalco/RegistroFotoPage";
import RegistroPalcoPage from "./Pages/Propietario/RegistroPalco/RegistroPalcoPage";
import RegistroPorpietarioPage from "./Pages/Propietario/RegistroPalco/RegistroPorpietarioPage";
import SingInPage from "./Pages/Propietario/Sign_in/SingInPage";


// Visitante Page
import VisitanteHome from './Pages/Visitante/Home/VisitanteHome'
<<<<<<< HEAD
// import Pagenosotros from './Pages/Visitante/Nosotros/Pagenosotros' 
import VisitanteRegistro from "./Pages/Visitante/Registro/VisitanteRegistro";
=======
import PageNosotros from './Pages/Visitante/Nosotros/PageNosotros'
>>>>>>> a886836999c89eb07e9f490bd005e6e3cd4ba8da
import VisitanteSignIn from "./Pages/Visitante/Sign-In/VisitanteSignIn";

function AppPrueba() {
  return (
    <>
<<<<<<< HEAD
      <NavbarCliente />
      <Routes>
        <Route path="/" element={<VisitanteHome />} />
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/registrate" element={<VisitanteRegistro/>}/>
        <Route path="/visitante" element={<Infohome/>}/>
        <Route path="/login" element={<VisitanteSignIn/>}/>

        {/* <Route path="/login" element={<VisitanteHome/>}/> */}
        

        <Route path="/eventos" element={<Evento />} />
=======

      {/* <NavbarVisit /> */}
      {/* Visitante */}

      <Routes>

        <Route>
          <Route path="/" element={<VisitanteHome />} />
          <Route path="/nosotros" element={<PageNosotros />} />
          <Route path="/todo-eventos" element={<TodoEventos />} />
          <Route path="/login" element={< SingInPage/>} />
          <Route path="/registro-usuario" element={< RegistroUsuario/>} />
<<<<<<< HEAD
          <Route path="/modal" element={< ModalResarva/>} />
         
=======
          {/* SingInPage */}
>>>>>>> d2547bf8a24c66bed7004967b8efa00ab3a2d86e

        </Route>




>>>>>>> a886836999c89eb07e9f490bd005e6e3cd4ba8da
        <Route path="/publicados" element={<Publicados />} />
        <Route path="/publicado" element={<Publicado />} />
        <Route path="/registro_propietario" element={<RegistroPorpietarioPage />} />
        <Route path="/registro_palco" element={<RegistroPalcoPage />} />
        <Route path="/registro_foto" element={<RegistroFotoPage />} />


        <Route path="*" element={<NotFoundPages />} />
      </Routes>




      <Footer />
      
    </>
  );
}

export default AppPrueba;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import TodoEventos from "./Components/Evento_Publicado/TodoEventos";

import Footer from "./Components/Footer/Footer";
import InfoEvento from "./Components/InfoEvento/InfoEvento";
import MisReservas from "./Components/MisReservas/MisReservas";
import ModalResarva from "./Components/Modal/ModalResarva";
import RegistroExitoso from "./Pages/Propietario/RegistroPalco/RegistroExitoPage";
import RegistroUsuario from "./Components/Registro/RegistroUsuario";
import NotFoundPages from "./Pages/not_found_404/NotFoundPages";
import ReservaExito from "./Pages/Cliente/AlquilerPalco/ReservaExitoPage";


import Publicado from "./Pages/Propietario/Publicados/Publicado/Publicado";
import Publicados from "./Pages/Propietario/Publicados/Publicados";
import RegistroFotoPage from "./Pages/Propietario/RegistroPalco/RegistroFotoPage";
import RegistroPalcoPage from "./Pages/Propietario/RegistroPalco/RegistroPalcoPage";
import RegistroPropietarioPage from "./Pages/Propietario/RegistroPalco/RegistroPropietarioPage";
import SingInPage from "./Pages/Propietario/Sign_in/SingInPage";

// Visitante Page
import VisitanteHome from './Pages/Visitante/Home/VisitanteHome'
import PageNosotros from './Pages/Visitante/Nosotros/PageNosotros'


// redux
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

import NavbarCliente from "./Components/Navbar/NavbarCliente/NavbarCliente";
import NavbarVisit from "./Components/Navbar/NavbarVisitante/NavbarVisit";
import Navbar from "./Components/Navbar/Navbar";

import PropietarioHome from "./Pages/Propietario/Home/PropietarioHome";

function AppPrueba() {
  const user = useSelector(selectUser)
  console.log(user);

  let achis;
  if (user === null) {
    achis = 0;
  } else {
    if (user.loggedIn === 'cliente') {
      achis = 2;
    } else if (user.loggedIn === 'propietario') {
      achis = 2;
    } 
  }
 
  console.log(achis)
  return (
    <>
      { achis === 0 ? <NavbarVisit />  : achis === 1 ? <NavbarCliente /> : achis === 2 ? <Navbar /> : <NavbarVisit /> }

      <Routes>
        
        {/* <Route> */}
          <Route path="/" element={<VisitanteHome />} />
          <Route path="/nosotros" element={<PageNosotros />} />
          <Route path="/todo-eventos" element={<TodoEventos />} />
          <Route path="/info-evento" element={<InfoEvento />} />
          <Route path="/login" element={< SingInPage/>}> 
            <Route path=":home-propietario" element={<PropietarioHome />} /> 
          </Route>
          <Route path="/registro-usuario" element={< RegistroUsuario/>} />
          <Route path="/modal" element={< ModalResarva/>} />
          <Route path="/mis-reservas" element={< MisReservas/>} />
          <Route path="/registro_exitoso" element={< RegistroExitoso/>} />
          <Route path="/reserva-exito" element={< ReservaExito/>} />
        {/* </Route> */}




        <Route path="/publicados" element={<Publicados />} />
        <Route path="/publicado" element={<Publicado />} />
        <Route path="/registro_propietario" element={<RegistroPropietarioPage />} />
        <Route path="/registro_palco" element={<RegistroPalcoPage />} />
        <Route path="/registro_foto" element={<RegistroFotoPage />} />


        {/* <Route > */}
          <Route path="/home-propietario" element={<PropietarioHome />} />
          <Route path="/publicados" element={<Publicados />} />
          <Route path="/publicado" element={<Publicado />} />
          <Route path="/registro_propietario" element={<RegistroPropietarioPage />} />
          <Route path="/registro_palco" element={<RegistroPalcoPage />} />
          <Route path="/registro_foto" element={<RegistroFotoPage />} />
        {/* </Route> */}
        
        <Route path="*" element={<NotFoundPages />} />
      </Routes>


      {/* <PageInfoEvento />*/}
      <Footer />
      
    </>
  );
}

export default AppPrueba;

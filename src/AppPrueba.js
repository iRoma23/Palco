import { Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./Components/Footer/Footer";
import InfoEvento from "./Components/InfoEvento/InfoEvento";
import MisReservas from "./Components/MisReservas/MisReservas";
import ModalResarva from "./Components/Modal/ModalResarva";

import PageInfoEvento from "./Pages/Cliente/Info_Evento/PageInfoEvento";
import NotFoundPages from "./Pages/not_found_404/NotFoundPages";



import RegistroFotoPage from "./Pages/Propietario/RegistroPalco/RegistroFotoPage";



// Visitante Page
import VisitanteHome from './Pages/Visitante/Home/VisitanteHome'
import TodoEventos from "./Components/Evento_Publicado/TodoEventos";
import PageNosotros from './Pages/Visitante/Nosotros/PageNosotros'
import SingInPage from "./Pages/Propietario/Sign_in/SingInPage";
import RegistroUsuario from "./Components/Registro/RegistroUsuario";
import RegistroPorpietarioPage from "./Pages/Propietario/RegistroPalco/RegistroPorpietarioPage";
import RegistroPalcoPage from "./Pages/Propietario/RegistroPalco/RegistroPalcoPage";

// Propietario Page
import PropietarioHome from "./Pages/Propietario/Home/PropietarioHome";
import Publicados from "./Pages/Propietario/Publicados/Publicados";
import Publicado from "./Pages/Propietario/Publicados/Publicado/Publicado";

// Cliente Page
import ClienteHome from './Pages/Cliente/Home/ClienteHome'

// redux
import { useSelector } from "react-redux";

// Navbars
import NavbarVisit from "./Components/Navbar/NavbarVisitante/NavbarVisit";
import Navbar from "./Components/Navbar/Navbar";

function AppPrueba() {

  const role = useSelector((state) => state.role)
  console.log(role);

  return (
    <>
      {role === 'VISITANTE'
        ? <NavbarVisit />
        : <Navbar />}
      <Routes>
          // Rutas Visitante
          <Route path="/" element={<VisitanteHome />} />
          <Route path="/eventos" element={<TodoEventos />} />
          <Route path="/nosotros" element={<PageNosotros />} />
          <Route path="/login" element={< SingInPage/>} /> 
          <Route path="/registro-usuario" element={< RegistroUsuario/>} />
          <Route path="/registro_propietario" element={<RegistroPorpietarioPage />} />
          <Route path="/registro_palco" element={<RegistroPalcoPage />} />
          
          // Rutas CLIENTE
          <Route path="/home" element={<PropietarioHome />} />
          <Route path="/publicados" element={<Publicados />} />
          <Route path="/publicado" element={<Publicado />} />



          <Route path="/info-evento" element={<InfoEvento />} />
          
          
          <Route path="/modal" element={< ModalResarva/>} />
          <Route path="/mis-reservas" element={< MisReservas/>} />

          <Route path="/registro_foto" element={<RegistroFotoPage />} />

          <Route path="*" element={<NotFoundPages />} />
      </Routes>
      <Footer />
    </>
  );
}

export default AppPrueba;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import TodoEventos from "./Components/Evento_Publicado/TodoEventos";

import Footer from "./Components/Footer/Footer";
import MisReservas from "./Components/MisReservas/MisReservas";
import ModalResarva from "./Components/Modal/ModalResarva";

import RegistroUsuario from "./Components/Registro/RegistroUsuario";
import PageInfoEvento from "./Pages/Cliente/Info_Evento/PageInfoEvento";
import NotFoundPages from "./Pages/not_found_404/NotFoundPages";


import Publicado from "./Pages/Propietario/Publicados/Publicado/Publicado";
import Publicados from "./Pages/Propietario/Publicados/Publicados";
import RegistroFotoPage from "./Pages/Propietario/RegistroPalco/RegistroFotoPage";
import RegistroPalcoPage from "./Pages/Propietario/RegistroPalco/RegistroPalcoPage";
import RegistroPorpietarioPage from "./Pages/Propietario/RegistroPalco/RegistroPorpietarioPage";
import SingInPage from "./Pages/Propietario/Sign_in/SingInPage";

// Visitante Page
import VisitanteHome from './Pages/Visitante/Home/VisitanteHome'
import PageNosotros from './Pages/Visitante/Nosotros/PageNosotros'


function AppPrueba() {
  return (
    <>

      {/* <NavbarVisit /> */}
      {/* Visitante */}

      <Routes>

        <Route>
          <Route path="/" element={<VisitanteHome />} />
          <Route path="/nosotros" element={<PageNosotros />} />
          <Route path="/todo-eventos" element={<TodoEventos />} />
          <Route path="/login" element={< SingInPage/>} />
          <Route path="/registro-usuario" element={< RegistroUsuario/>} />
          <Route path="/modal" element={< ModalResarva/>} />
          <Route path="/mis-reservas" element={< MisReservas/>} />

        </Route>




        <Route path="/publicados" element={<Publicados />} />
        <Route path="/publicado" element={<Publicado />} />
        <Route path="/registro_propietario" element={<RegistroPorpietarioPage />} />
        <Route path="/registro_palco" element={<RegistroPalcoPage />} />
        <Route path="/registro_foto" element={<RegistroFotoPage />} />


        <Route path="*" element={<NotFoundPages />} />
      </Routes>


      {/* <PageInfoEvento />*/}
      <Footer />
      
    </>
  );
}

export default AppPrueba;

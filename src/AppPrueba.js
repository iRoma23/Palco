import { Routes, Route } from "react-router-dom";
import "./App.css";
import TodoEventos from "./Components/Evento_Publicado/TodoEventos";

import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import NavbarVisit from "./Components/Navbar/NavbarVisitante/NavbarVisit";
import Nosotros from "./Components/Nosotros/Nosotros";
import RegistroUsuario from "./Components/Registro/RegistroUsuario";
import NotFoundPages from "./Pages/not_found_404/NotFoundPages";
import Evento from "./Pages/Propietario/Home/Evento/Evento";
import PropietarioHome from "./Pages/Propietario/Home/PropietarioHome";
import Publicado from "./Pages/Propietario/Publicados/Publicado/Publicado";
import Publicados from "./Pages/Propietario/Publicados/Publicados";
import RegistroFotoPage from "./Pages/Propietario/RegistroPalco/RegistroFotoPage";
import RegistroPalcoPage from "./Pages/Propietario/RegistroPalco/RegistroPalcoPage";
import RegistroPorpietarioPage from "./Pages/Propietario/RegistroPalco/RegistroPorpietarioPage";
import SingInPage from "./Pages/Propietario/Sign_in/SingInPage";

// Visitante Page
import VisitanteHome from './Pages/Visitante/Home/VisitanteHome'
import PageNosotros from './Pages/Visitante/Nosotros/PageNosotros'
import VisitanteSignIn from "./Pages/Visitante/Sign-In/VisitanteSignIn";

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
          SingInPage

        </Route>




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

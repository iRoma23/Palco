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

// redux
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

import NavbarCliente from "./Components/Navbar/NavbarCliente/NavbarCliente";

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
      { achis === 0 ? <NavbarVisit /> : achis === 1 ? <NavbarCliente /> : achis === 2 ? <Navbar /> : <NavbarVisit /> }
      <Routes>
        
        {/* <Route> */}
          <Route path="/" element={<VisitanteHome />} />
          <Route path="/nosotros" element={<PageNosotros />} />
          <Route path="/todo-eventos" element={<TodoEventos />} />
          <Route path="/login" element={< SingInPage/>} />
          <Route path="/registro-usuario" element={< RegistroUsuario/>} />
        {/* </Route> */}

        {/* <Route > */}
          <Route path="/home-propietario" element={<PropietarioHome />} />
          <Route path="/publicados" element={<Publicados />} />
          <Route path="/publicado" element={<Publicado />} />
          <Route path="/registro_propietario" element={<RegistroPorpietarioPage />} />
          <Route path="/registro_palco" element={<RegistroPalcoPage />} />
          <Route path="/registro_foto" element={<RegistroFotoPage />} />
        {/* </Route> */}
        
        <Route path="*" element={<NotFoundPages />} />
      </Routes>

      <Footer />
      
    </>
  );
}

export default AppPrueba;

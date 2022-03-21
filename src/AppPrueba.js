import { Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import NotFoundPages from "./Pages/not_found_404/NotFoundPages";
import Evento from "./Pages/Propietario/Home/Evento/Evento";
import PropietarioHome from "./Pages/Propietario/Home/PropietarioHome";
import Publicado from "./Pages/Propietario/Publicados/Publicado/Publicado";
import Publicados from "./Pages/Propietario/Publicados/Publicados";
import RegistroFotoPage from "./Pages/Propietario/RegistroPalco/RegistroFotoPage";
import RegistroPalcoPage from "./Pages/Propietario/RegistroPalco/RegistroPalcoPage";
import RegistroPorpietarioPage from "./Pages/Propietario/RegistroPalco/RegistroPorpietarioPage";


// Visitante Page
import VisitanteHome from './Pages/Visitante/Home/VisitanteHome'
import Pagenosotros from './Pages/Visitante/Nosotros/Pagenosotros' 

function AppPrueba() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PropietarioHome />} />
        <Route path="/eventos" element={<Evento />} />
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

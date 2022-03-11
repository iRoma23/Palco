import './App.css';

import Navbar from './Components/Navbar/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import NotFoundPages from './Pages/not_found_404/NotFoundPages';
import Publicados from './Pages/Publicados/Publicados';
import Sing_In from './Pages/Sign_in/Sing_In';

import Eventos from './Pages/Eventos/Eventos';
import RegistrarPropietario from './Pages/Registrar_Palco/RegistrarPropietario';
import RegistrarPalco from './Pages/Registrar_Palco/RegistrarPalco';
import RegistrarFotos from './Pages/Registrar_Palco/RegistrarFotos';

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Sing_In />} />

          <Route path='/propietario' element={<RegistrarPropietario />} />
          <Route path='/palco' element={<RegistrarPalco />} />
          <Route path='/foto_palco' element={<RegistrarFotos />} />
          <Route path='/publicados' element={<Publicados />} />
          <Route path='/eventos' element={<Eventos />} />

          <Route path='*' element={<NotFoundPages />} />
        </Routes>


      </BrowserRouter>

    </>
  );
}

export default App;

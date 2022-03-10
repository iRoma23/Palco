import './App.css';

import Navbar from './Components/Navbar/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import NotFoundPages from './Pages/not_found_404/NotFoundPages';
import Publicados from './Pages/Publicados/Publicados';
import Sing_In from './Pages/Sign_in/Sing_In';
// import RegistrarPalco from './Pages/Registrar_Palco/RegistrarPalco';
import Eventos from './Pages/Eventos/Eventos';
import RegistrarPalco from './Pages/Registrar_Palco/RegistrarPalco';

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Sing_In />} />
          <Route path='/registrar_palco' element={<RegistrarPalco />} />
          <Route path='/publicados' element={<Publicados />} />
          <Route path='/eventos' element={<Eventos />} />

          <Route path='*' element={<NotFoundPages />} />
        </Routes>


      </BrowserRouter>

    </>
  );
}

export default App;

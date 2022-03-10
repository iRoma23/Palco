import './App.css';
import Navbar from './Components/Navbar/Navbar';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Pages/Home/Home'
import Publicados from './Pages/Publicados/Publicados'
import Sing_In from './Pages/Sign_in/Sing_In'
import NotFoundPages from './Pages/not_found_404/NotFoundPages';

function App() {
  return (
   <>
   <Navbar />
   <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<Home />}/>
        <Route path='public' element={<Publicados/>}/>
        <Route path='signin' element={<Sing_In/>}/>

        <Route path='*' element={<NotFoundPages />} />

      </Routes>

      </BrowserRouter>
   </>
  );
}

export default App;

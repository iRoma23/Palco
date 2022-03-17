import './App.css';
import Descripcion from './Components/Descripcion/Descripcion';
import Informacion from './Components/Informacion/Informacion';
import Navbar from './Components/Navbar/Navbar'

function AppPrueba() {

  return (
    <>
      <Navbar />
      <Informacion />
      <Descripcion />
    </>
  ); 
}

export default AppPrueba;

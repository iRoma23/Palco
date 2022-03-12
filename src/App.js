import './App.css';
import Carrusel from './Components/Carrusel/Carrusel';
import Footer2 from './Components/Footer/Footer2';

import Navbar from './Components/Navbar/Navbar';
import { SignIn } from './Components/Sign_in/SignIn';


function App() {
  return (
    <>
      <Navbar />
      <SignIn />
      <Carrusel />
      <Carrusel />
      <Carrusel />
      <Footer2 />
    </>
  ); 
}

export default App;

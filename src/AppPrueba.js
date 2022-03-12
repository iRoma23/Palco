import './App.css';
import Carrusel from './Components/Carrusel/Carrusel';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { SignIn } from './Components/Sign_in/SignIn';

function AppPrueba() {

  const images = ['01.jpg', '02.jpg', '03.jpg'];
  return (
    <>
      <Navbar />
      <SignIn />
      <Carrusel images={images} autoplay ={true} />
      <Carrusel images={images}/>
      <Carrusel images={images}/>
      <Footer />
    </>
  ); 
}

export default AppPrueba;

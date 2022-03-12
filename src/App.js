import './App.css';
import Carrusel from './Components/Carrusel/Carrusel';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const images = ['01.jpg', '02.jpg', '03.jpg'];
  return (
    <>
      <Navbar />
      <Carrusel images={images} autoplay={true} />
      <Carrusel images={images} />
      <Carrusel images={images} />
    </>
  ); 
}

export default App;
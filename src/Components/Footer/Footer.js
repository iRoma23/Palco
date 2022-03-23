import React from "react";
import facebook from "../../Assets/images/facebook.png";
import twitter from "../../Assets/images/twitter.png";
import instagram from "../../Assets/images/instagram.png";
import youtube from "../../Assets/images/youtube.png";
import logo from "../../Assets/images/logo3.PNG";

const Footer = () => {
  return (
    <footer className="">
      <div className="row align-items-center pt-3 pb-3 m-0 bg-dark text-white">
        <div className="col-md-3 text-center pb-2">
            <a href="#">
              <img className="img-fluid" src={logo} alt="TuPalco" />
            </a>  
        </div>
        <div className="col-md-3">
          <p className="text-justify">
            Somos una empresa dedicada al alquiler de Palcos, trabajamos como
            intermediarios entre el propietario del Palco y la persona
            interesada en alquilar alguno.
          </p>
        </div>
        <div className="col-md-3">
          <ul className="list">
            <li><a href="#" className="text-decoration-none text-light">Términos y Condiciones</a></li>
            <li><a href="#" className="text-decoration-none text-light">Politica de Privacidad</a></li>
            <li><a href="#" className="text-decoration-none text-light">Descargo de Responsabilidad</a></li>
            <li><a href="#" className="text-decoration-none text-light">Contáctanos</a></li>
            
          </ul>
        </div>
        <div className="col-md-3">
          <h2>Siguenos en:</h2>
          <div className="row mt-4 justify-content-around">
            <a href="#" className="col-2">
              <img className="m" width="32px" src={facebook} />
            </a>
            <a href="#" className="col-2">
              <img className="" width="32px" src={instagram} />
            </a>
            <a href="#" className="col-2">
              <img className="" width="32px" src={twitter} />
            </a>
            <a href="#" className="col-2">
              <img className="" width="32px" src={youtube} />
            </a>
          </div>
        </div>
      </div>
      <div className="p-3 bg-secondary text-white text-center">
        <small>
          &copy; 2022 <b>Tu Palco</b> - Todos los Derechos Reservados
        </small>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import facebook from "../../Assets/images/facebook.png";
import twitter from "../../Assets/images/twitter.png";
import instagram from "../../Assets/images/instagram.png";
import youtube from "../../Assets/images/youtube.png";
import logo from "../../Assets/images/logo1.PNG";

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="row align-items-center p-2 m-0 bg-dark text-white">
        <div className="col-4 text-center">
          <figure className="figure figure-img">
            <a href="#">
              <img src={logo} width="100" alt="logo tupalco" />
              <figcaption className="figure-caption">www.palcosport.com</figcaption>
            </a>
          </figure>
        </div>
        <div className="col-4">
          <h2>SOBRE NOSOTROS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum iste
            cupiditate amet? safsd sdfsdf gfdsgdfg
          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit? fsafdff fdsf</p>
        </div>
        <div className="col-4">
          <h2>SIGUENOS:</h2>
          <div className="row mt-4">
              <a href="#" className="col-2">
                <img className="" width="32px" src={facebook}/>
              </a>
              <a href="#" className="col-2">
                <img className="" width="32px" src={instagram}/>
              </a>
              <a href="#" className="col-2">
                <img className="" width="32px" src={twitter}/>
              </a>
              <a href="#" className="col-2">
                <img className="" width="32px" src={youtube}/>
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

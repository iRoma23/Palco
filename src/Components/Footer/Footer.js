import React from "react";
import facebook from "../../Assets/images/facebook.png";
import twitter from "../../Assets/images/twitter.png";
import instagram from "../../Assets/images/instagram.png";
import youtube from "../../Assets/images/youtube.png";
import logo from "../../Assets/images/logo1.PNG";

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="row align-items-center p-2 bg-dark text-white">
        <div className="col text-center">
          <figure className="figure figure-img">
            <a href="#">
              <img src={logo} width="100" alt="logo tupalco" />
              <figcaption className="figure-caption">www.palcosport.com</figcaption>
            </a>
          </figure>
        </div>
        <div className="col">
          <h2>SOBRE NOSOTROS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum iste
            cupiditate amet? safsd sdfsdf gfdsgdfg
          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit? fsafdff fdsf</p>
        </div>
        <div className="col ">
          <h2>SIGUENOS</h2>
          <div className="row">
              <a href="#" className="col">
                <img className="col" width="16" src={facebook}/>
              </a>
              <a href="#" className="col">
                <img className="col" width="16" src={instagram}/>
              </a>
              <a href="#" className="col">
                <img className="col" width="16" src={twitter}/>
              </a>
              <a href="#" className="col">
                <img className="col" width="16" src={youtube}/>
              </a>
          </div>
        </div>
      </div>
      <div className="p-3 bg-secondary text-white container-fluid text-center">
        <small>
          &copy; 2022 <b>Tu Palco</b> - Todos los Derechos Reservados
        </small>
      </div>
    </footer>
  );
};

export default Footer;

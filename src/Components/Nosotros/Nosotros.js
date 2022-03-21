import React from "react";
import imgpalco from "../../Assets/images/palco_nosotros.jpg";
import logo from "../../Assets/images/logo3.PNG";
import equipo from "../../Assets/images/equipo1.png";

const Nosotros = () => {
  return (
    <div className="">
      <div className="container-md p-5">
        <div className="row justify-content-center">
          <img className="col-8" src={logo} alt="TuPalco" />
        </div>
      </div>
      <div className="container-md p-3">
        <div className="row justify-content-center">
          <div className="col-md-6 pb-3">
            <img src={imgpalco} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-6">
            <p className="text-justify fs-3">
              Somos una empresa dedicada al alquiler de Palcos, trabajamos como
              intermediarios entre el propietario del Palco y la persona
              interesada en alquilar alguno brindando la mayor confiabilidad y
              seguridad a la hora de alquilar un palco para el evento que
              deseas.
            </p>
          </div>
        </div>
      </div>
      <div className="container-md">
        <div className="row"><p className="fs-2">Equipo:</p></div>
        <div className="row justify-content-center">
          <div className="col-3">
            <figure className="justify-content-center">
              <img src={equipo} className="" width="90" alt="equipo" />
              <figcaption className="text-center">Romario</figcaption>
            </figure>
          </div>
          <div className="col-3">
            <figure>
              <img src={equipo} className="" width="90" alt="equipo" />
              <figcaption className="text-center">Roberto</figcaption>
            </figure>
          </div>
          <div className="col-3">
            <figure>
              <img src={equipo} className="" width="90" alt="equipo" />
              <figcaption className="text-center">Ronald</figcaption>
            </figure>
          </div>
          <div className="col-3">
            <figure>
              <img src={equipo} className="" width="90" alt="equipo" />
              <figcaption className="text-center">Julio</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;

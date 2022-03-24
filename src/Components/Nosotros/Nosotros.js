import React from "react";
import imgpalco from "../../Assets/images/palco_nosotros.jpg";
import logo from "../../Assets/images/logo3.PNG";
import equipo from "../../Assets/images/equipo1.png";

const Nosotros = () => {
  return (
    <div className="">
      <div className="container-md text-center py-4">
          <img className="img-fluid" width={400} height="auto" src={logo} alt="TuPalco" />
      </div>
      <div className="container-md py-3">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 text-center">
            <img src={imgpalco} className="img-fluid" width={350} height="auto" alt="..." />
          </div>
          <div className="col-md-7">
            <p className="text-md-start fs-4">
              Somos una empresa dedicada al alquiler de Palcos, trabajamos como
              intermediarios entre el propietario del Palco y la persona
              interesada en alquilar alguno brindando la mayor confiabilidad y
              seguridad a la hora de alquilar un palco para el evento que
              deseas.
            </p>
          </div>
        </div>
      </div>
      <div className="container-md py-3">
        <div className="row"><p className="fs-2">Equipo:</p></div>
        <div className="row justify-content-center">
          <div className="col-3">
            <figure className="figure">
              <img src={equipo} className="figure-img img-fluid border rounded-circle" width={200} height="auto" alt="equipo" />
              <figcaption className="figure-caption text-center fs-5">Romario</figcaption>
            </figure>
          </div>
          <div className="col-3">
            <figure className="figure">
              <img src={equipo} className="figure-img img-fluid border rounded-circle" width={200} height="auto" alt="equipo" />
              <figcaption className="figure-caption text-center fs-5">Roberto</figcaption>
            </figure>
          </div>
          <div className="col-3">
            <figure className="figure">
              <img src={equipo} className="figure-img img-fluid border rounded-circle" width={200} height="auto" alt="equipo" />
              <figcaption className="figure-caption text-center fs-5">Ronald</figcaption>
            </figure>
          </div>
          <div className="col-3">
            <figure className="figure">
              <img src={equipo} className="figure-img img-fluid border rounded-circle" width={200} height="auto" alt="equipo" />
              <figcaption className="figure-caption text-center fs-5">Julio</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;

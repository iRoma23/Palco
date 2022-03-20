import React from "react";
import imgpalco from '../../Assets/images/palco_nosotros.jpg'

const Nosotros = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <img src={imgpalco} className="img-fluid" alt="..."/>
        </div>
        <div className="col-md-6 h3 text-center">Somos una empresa dedicada al alquiler de Palcos, trabajamos como intermediarios entre el propietario del Palco y la persona interesada en alquilar alguno brindando la mayor confiabilidad y seguridad a la hora de alquilar un palco para el evento que deseas.
        </div>
      </div>
    </div>
  );
};

export default Nosotros;

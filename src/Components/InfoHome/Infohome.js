import React from "react";
import imgdueñopalco from '../../Assets/images/dueñopalco.jpg'
import imgentradapalco from '../../Assets/images/entradapalco.jpg'

const Infohome = () => {
  return (
    <>
    <div className="container row justify-content-around mt-5 mb-3">
      <div className="col-md-5 text-center card mb-2 p-2">
        <img src={imgdueñopalco} className="card-img-top" alt="imgdueñopalco" />
        <div className="card-body">
          <h5 className="card-title">Dueño de Palco</h5>
          <p className="card-text">
            Administramos tu propiedad para que te sientas tranquilo y obtengas ingresos desde la comodidad de tu hogar.
          </p>
          <a href="#" className="btn btn-primary">
            Registrar mi propiedad
          </a>
        </div>
      </div>
      <div className="col-md-5 text-center card p-2">
        <img src={imgentradapalco} className="card-img-top" alt="imgdueñopalco" />
        <div className="card-body">
          <h5 className="card-title">Usuario</h5>
          <p className="card-text">
            Disfruta de los mejores partidos comodamente  y con la mejor vista desde nuestros palcos junto a tu familia y amigos.
          </p>
          <a href="#" className="btn btn-primary">
            Alquilar un Palco
          </a>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Infohome;

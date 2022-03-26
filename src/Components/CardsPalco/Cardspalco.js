import React from "react";
import { NavLink } from "react-router-dom";
import imgdueñopalco from "../../Assets/images/dueñopalco.jpg";
import imgentradapalco from "../../Assets/images/entradapalco.jpg";

const Cardspalco = () => {
  return (
    <div className="">
      <div className="container-md row mx-auto my-5">
        <div className="col-md text-center m-1 card">
          <img
            src={imgdueñopalco}
            className="card-img-top pt-3"
            alt="imgdueñopalco"
          />
          <div className="card-body">
            <h5 className="card-title">Dueño de Palco</h5>
            <p className="card-text">
              Administramos tu propiedad para que te sientas tranquilo y
              obtengas ingresos desde la comodidad de tu hogar.
            </p>
            <NavLink to="/registro_propietario" className="btn btn-primary">
              Registrar mi propiedad
            </NavLink>
          </div>
        </div>
        <div className="col-md text-center m-1 card">
          <img
            src={imgentradapalco}
            className="card-img-top pt-3"
            alt="imgdueñopalco"
          />
          <div className="card-body">
            <h5 className="card-title">Usuario</h5>
            <p className="card-text">
              Disfruta de los mejores partidos comodamente y con la mejor vista
              desde nuestros palcos junto a tu familia y amigos.
            </p>
            <NavLink to="/todo-eventos" className="btn btn-primary">
              Alquilar un Palco
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardspalco;

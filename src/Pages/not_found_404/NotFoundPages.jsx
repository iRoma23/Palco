import React from "react";
import { NavLink } from "react-router-dom";
import notFound from "./img/not-found.svg";
import "./main.css";

const NotFoundPages = () => {
  return (
    <div className="">
      <div className="container">
        <img className='img-404' src={notFound} alt="Not Found" />
        <h1 className="tex-muted text-center">La página no se encuentra disponible</h1>
        <div >
          <NavLink to='/' className="btn btn-secondary">Volver atras</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPages;

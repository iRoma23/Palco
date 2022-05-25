import React from 'react'

import Nuka from "nuka-carousel";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";

import './main.css'
import NukaCar from '../../../Components/NukaCar/NukaCar';
import TodoEventos from '../../../Components/Evento_Publicado/TodoEventos';

const PropietarioHome = () => {

  return (
    <>
      <div >
        <p3 className="bold">Bienvenido Roberto!</p3>
        <NukaCar />
        <TodoEventos />
      
        <div className="row row-cols-1 row-cols-md-3 g-4 m-1">
          <div className="col ">
            <div className="contenedor  shadow">
              <img src={img4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Cienciano vs Sport Boys</h5>
                <p className="card-text">Fecha: 19 de marzo 2022 </p>
              </div>
              <div className="card-footer d-flex flex-row justify-content-between">
                <small className="text-muted">Precio: s/ 50.00</small>
                <button className='btn btn-outline-dark'>Ver Palco</button>
              </div>
            </div>
          </div>
          <div className="col  ">
            <div className="contenedor  shadow">
              <img src={img3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Cantolao vs Ayacucho FC</h5>
                <p className="card-text">Fecha: 19 de marzo 2022</p>
              </div>
              <div className="card-footer d-flex flex-row justify-content-between">
                <small className="text-muted">Precio: s/ 50.00</small>
                <button className='btn btn-outline-dark'>Ver Palco</button>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="contenedor shadow">
              <img src={img2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Cantolao vs Binacional</h5>
                <p className="card-text">Fecha: 19 de marzo 2022</p>
              </div>
              <div className="card-footer d-flex flex-row justify-content-between">
                <small className="text-muted">Precio: s/ 50.00</small>
                <button className='btn btn-outline-dark'>Ver Palco</button>
              </div>
            </div>
          </div>
        </div>

      </div>



    </>
  )
}

export default PropietarioHome;
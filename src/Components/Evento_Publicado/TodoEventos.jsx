import React from 'react'
import { NavLink } from 'react-router-dom';
import NavbarVisit from '../Navbar/NavbarVisitante/NavbarVisit';
import brasil from "./img/brasil.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import ban1 from "./img/ban1.webp";
import banner from "./img/banner.webp";

import './main.css'

const TodoEventos = () => {
  return (
      <>
      <div className='m-5 '>
        <h1 className=''>Eventos </h1>

        <div className="contenedor row row-cols-1 row-cols-md-3 g-4 m-1">

          <div className="col ">
            <div className="contenedor shadow">
              <img src={brasil} className="card-img-top" alt="..." />


              <div className="card-body">
                <h5 className="card-title">Copa America Brasil</h5>
                <p className="card-text">Fecha: 19 de marzo 2022</p>
              </div>
              <div className="card-footer d-flex flex-row justify-content-center">
                <NavLink to="/login" className='btn btn-outline-dark'>Ver Palco</NavLink>
              </div>


            </div>
          </div>
          <div className="col ">
            <div className="contenedor shadow">
              <img src={img2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Cristal vs Alianza Sullana</h5>
                <p className="card-text">Fecha: 19 de marzo 2022</p>
              </div>
              <div className="card-footer d-flex flex-row justify-content-center">
                <NavLink to="/login" className='btn btn-outline-dark'>Ver Palco</NavLink>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="contenedor  shadow">
              <img src={img3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Universitario vs Melgar</h5>
                <p className="card-text">Fecha: 19 de marzo 2022</p>
              </div>
              <div className="card-footer d-flex flex-row justify-content-center">
                <NavLink to="/login" className='btn btn-outline-dark'>Ver Palco</NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* ------- */}
        <div className="row row-cols-1 row-cols-md-3 g-4 m-1">
          <div className="col ">
            <div className="contenedor  shadow">
              <img src={img4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Cienciano vs Sport Boys</h5>
                <p className="card-text">Fecha: 19 de marzo 2022 </p>
              </div>
              <div className="card-footer d-flex flex-row justify-content-center">
                <NavLink to="/login" className='btn btn-outline-dark'>Ver Palco</NavLink>
              </div>
            </div>
          </div>
          <div className="col  ">
            <div className="contenedor  shadow">
              <img src={ban1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Cantolao vs Ayacucho FC</h5>
                <p className="card-text">Fecha: 19 de marzo 2022</p>
              </div>
              <div className="card-footer d-flex flex-row justify-content-center">
                <NavLink to="/login" className='btn btn-outline-dark'>Ver Palco</NavLink>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="contenedor shadow">
              <img src={banner} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Cantolao vs Binacional</h5>
                <p className="card-text">Fecha: 19 de marzo 2022</p>
              </div>
              <div className="card-footer d-flex flex-row justify-content-center">
                <NavLink to="/login" className='btn btn-outline-dark'>Ver Palco</NavLink>
              </div>
            </div>
          </div>
        </div>

      </div>
      </>
    
  )
}

export default TodoEventos
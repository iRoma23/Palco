import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

import Nuka from "nuka-carousel";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";

import './main.css'
import Navbar from '../../../Components/Navbar/Navbar';
import NukaCar from '../../../Components/NukaCar/NukaCar';
import TodoEventos from '../../../Components/Evento_Publicado/TodoEventos';
import CardEvento from '../../../Components/CardEvento/CardEvento';

const PropietarioHome = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/info-evento')
  }

  return (
    <>
      <NukaCar />

      <div className='m-5 '>
        <h1 className=''>Eventos </h1>
        <div className="contenedor row g-4 m-1">
          <CardEvento 
            handleClick={handleClick}
            titulo={'Real Madrid vs Valencia'}
            fecha={'19 de marzo 2022'}
            img={img1}
          />

          <CardEvento 
            handleClick={handleClick}
            titulo={'Cristal vs Alianza Sullana'}
            fecha={'19 de marzo 2022'}
            img={img2}
          />

          <CardEvento 
            handleClick={handleClick}
            titulo={'Universitario vs Melgar'}
            fecha={'19 de marzo 2022'}
            img={img2}
          />

          <CardEvento 
            handleClick={handleClick}
            titulo={'Universitario vs Melgar'}
            fecha={'19 de marzo 2022'}
            img={img2}
          />

          <CardEvento 
            handleClick={handleClick}
            titulo={'Real Madrid vs Valencia'}
            fecha={'19 de marzo 2022'}
            img={img1}
          />

          <CardEvento 
            handleClick={handleClick}
            titulo={'Cristal vs Alianza Sullana'}
            fecha={'19 de marzo 2022'}
            img={img2}
          />

          <CardEvento 
            handleClick={handleClick}
            titulo={'Universitario vs Melgar'}
            fecha={'19 de marzo 2022'}
            img={img2}
          />
        </div>
      </div> 
    </>
  )
}

export default PropietarioHome;
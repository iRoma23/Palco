import React from 'react'

import Nuka from "nuka-carousel";
import img1 from "./img/ban1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";

const NukaCar = () => {
  return (
    <div classname='container-fluid p-2'>
      <Nuka className='contenedor card'>
        <img src={img1} alt='evento' />
        <img src={img2} alt='evento' />
        <img src={img3} alt='evento' />
        <img src={img4} alt='evento' />
        <img src={img3} alt='evento' />
      </Nuka>
    </div>
  )
}

export default NukaCar
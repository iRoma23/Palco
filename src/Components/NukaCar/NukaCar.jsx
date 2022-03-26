import React from "react";

import Nuka from "nuka-carousel";
import img1 from "./img/grupo1.jpg";
import img2 from "./img/grupo2.jpg";
import img3 from "./img/grupo3.jpg";
import img4 from "./img/grupo4.jpg";
import img5 from "./img/grupo5.jpg";



const NukaCar = () => {
  return (
    <div classname="container-fluid p-2">
      <Nuka className="card">
        <img src={img1} alt="evento" />
        <img src={img2} alt="evento" />
        <img src={img3} alt="evento" />
        <img src={img4} alt="evento" />
        <img src={img5} alt="evento" />
        <img src={img1} alt="evento" />
      </Nuka>
    </div>
  );
};

export default NukaCar;

import React, { useState } from "react";
import img1 from "./img/1.jpg";
import vip from "./img/palco_vip.jpg"
import gold from "./img/palco_gold.jpg"
import premium from "./img/palco_premium.jpg"
import "./main.css";
import { useNavigate } from "react-router-dom";
import Notification from "../Notification/Notification";

const InfoEvento = () => {
  const [message, setMessage] = useState({msg: null, success: null})

  const navigate = useNavigate()

  const notifier = (msg, success) => {
    const msgObject = {
      msg: msg,
      success: success
    }
    setMessage(msgObject)
    setTimeout(() => {
      setMessage({msg: null, success: null})
      navigate('/home')
    }, 2000)
  }

  const addReserva = () => {
    notifier(`Se reservo el evento`, true)
  }

  return (
    <>
      <Notification message={message} />
      <div className="m-5">

        <div className="contenedor row row-cols-1 row-cols-md-3 g-4 ">

          <div className="col-md-3">
            <h3>Evento:</h3>
            <div className="contenedor shadow">
              <img src={img1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Alianza vs San Martin</h5>
                <p className="card-text">Fecha: 19 de marzo 2022</p>
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <h3>Palcos disponibles:</h3>
            <div className="row align-items-center border-top mb-3">
              <div className="col-md-3">
                <img src={premium} className="card-img-top" alt="..." />
              </div>
              <div className="col-md-3">
                <div className="ul ">
                  <h5 className="">Palco Premium:</h5>
                  <li className="">Información Palco</li>
                  <li className="">Información Palco</li>
                  <li className="">Información Palco</li>
                </div>
              </div>
              <div className=" col text-center">
                <h5 className="border bg-info p-1">S/ 950.00</h5>
              </div>
              <div className=" col text-center">
                <button 
                  className="btn btn-primary btn-lg rounded-pill"
                  onClick={addReserva}
                >
                  Reservar
                </button>
              </div>
            </div>
            <div className="row align-items-center border-top mb-3">
              <div className="col-md-3">
                <img src={gold} className="card-img-top" alt="..." />
              </div>
              <div className="col-md-3">
                <div className="ul ">
                  <h5 className="">Palco Gold:</h5>
                  <li className="">Información Palco</li>
                  <li className="">Información Palco</li>
                  <li className="">Información Palco</li>
                </div>
              </div>
              <div className=" col text-center">
                <h5 className="border bg-info p-1">S/ 750.00</h5>
              </div>
              <div className=" col text-center">
                <button className="btn btn-primary btn-lg rounded-pill">Reservar</button>
              </div>
            </div>
            <div className="row align-items-center border-top">
              <div className="col-md-3">
                <img src={vip} className="card-img-top" alt="..." />
              </div>
              <div className="col-md-3">
                <div className="ul ">
                  <h5 className="">Palco Vip:</h5>
                  <li className="">Información Palco</li>
                  <li className="">Información Palco</li>
                  <li className="">Información Palco</li>
                </div>
              </div>
              <div className=" col text-center">
                <h5 className="border bg-info p-1">S/ 550.00</h5>
              </div>
              <div className=" col text-center">
                <button className="btn btn-primary btn-lg rounded-pill">Reservar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoEvento;

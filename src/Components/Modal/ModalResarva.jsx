import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

import logo3 from "../../Assets/images/done-outline.svg";

const ModalResarva = () => {
  return (
    <div>
      <section className="modal-body ">
        <div className="modal__container ">
          <figure className="d-flex flex-column justify-content-center">
            
              <img src={logo3} className="modal__image position-sticky" />
            
          </figure>
          <h2 className="modal__title">
            <span>Palco Publicado</span>
          </h2>

          <p className="modal__paragraph">
            Tu palco a sido publicado con éxito. Puedes seguir viendo los palcos
            disponibles para tu eventos favoritos haciendo clic en el siguiente
            boton
          </p>

          <Link to="/todo-eventos" className="btn btn-primary" type="button">
            Ir a Eventos
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ModalResarva;

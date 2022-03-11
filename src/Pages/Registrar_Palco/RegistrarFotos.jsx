import React from 'react'
import portada from "./img/butacas.jpg";

const RegistrarFotos = () => {
  return (
    <>
        <div className="container card-body ">
        <div className="card-body">
          <h3 className="text-muted mt-2 mb-2">FOTO DE PORTADA</h3>

          <div className="card-body mb-3 caja">
            <div className="form-control">
              <img src={portada} alt="palco" />
              <h1 className="display-6 text-center">Elige una foto de Portada</h1>
            </div>
          </div>
        </div>

        <div className=" card-body ">
          <div className="card-body mt-5 ">
            <p className="fw-bold mt mb-3">
              Sube al menos 1 fotografía del palco
            </p>
          </div>

          <div className="card-body">
            <div class="text-center" type="file">
             

              <div class="card-body">
           
                <h5 class="card-title">Subir fotos</h5>
                <label for="exampleFormControlFile1"></label>

                <input
                  type="file"
                  class="form-control-file"
                  id="exampleFormControlFile1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegistrarFotos
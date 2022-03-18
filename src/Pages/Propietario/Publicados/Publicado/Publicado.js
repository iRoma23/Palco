import React from 'react'
import { Link } from 'react-router-dom';
import Carrusel from '../../../../Components/Carrusel/Carrusel';

const Publicado = () => {
  const images = ['01.jpg', '02.jpg', '03.jpg'];

  return (

    <>

      <div className='container d-flex flex-column align-items-center'>

        <div className='col-4'>
          <Carrusel images={images} autoplay={true} />
        </div>

        <div className="col-4">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">card.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          <div className=" gap-2 d-md-flex justify-content-md-end mt-2">
            {/* <Link type="button" class="btn btn-primary " to="/publicado">
              Ver Evento
            </Link> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Publicado
import React from 'react'

const Informacion = () => {
  const images = ['01.jpg', '02.jpg', '03.jpg'];
  
  return (
    <div className='row justify-content-center mt-3'>
      <div className='col-6'>
        <div className=''>
          <img className='card-img-top' src={require(`../Carrusel/img/${images[0]}`)}/>
        </div>
        <div className='card-body'>
          <div className='mt-2 d-flex justify-content-between'>
            <span>Fecha:</span>
            <span>01/01/22</span>
          </div>
          <div className='mt-2'>
            <span>Estadio:</span>
            <select className='form-select'>
              <option selected>Escoge tu estadio</option>
              <option value="1">Monumental</option>
              <option value="2">Nacional</option>
            </select>
          </div>
          <div className='mt-2'>
            <span>Palco:</span>
            <select className='form-select'>
              <option selected>Escoge tu palco</option>
              <option value="1">100</option>
              <option value="2">101</option>
            </select>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Informacion
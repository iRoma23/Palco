import React from 'react'

const Descripcion = () => {
  return (
    <div className='row justify-content-center mt-3 mx-0'>
      <div className='col-10 col-sm-9 col-md-8'>
        <h3>Descripcion</h3>
        <ul className='border border-dark'>
          {/* Falta un "for" con la base de datos */}
          <li className='p-2'>10 personas</li>
          <li className='p-2'>1 baño</li>
          <li className='p-2'>2 cocheras</li>
        </ul>
      </div>
    </div>
  )
}

export default Descripcion
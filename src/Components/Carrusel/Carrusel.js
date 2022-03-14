import React, { useEffect, useState } from 'react';
import './Carrusel.css';

const Carrusel = (props) => {
  // const images = ['01.jpg', '02.jpg', '03.jpg'];

  /**
   * Hooks
   */

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(props.images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (props.autoplay) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, props.images)
      }, 2000);
      return () => clearInterval(interval);
    }
  })

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      let nextIndex
      if (next) {
        if (index < images.length - 1) {
          nextIndex = index + 1;
        } else {
          nextIndex = 0;
        }
      } else {
        if (index > 0) {
          nextIndex = index - 1;
        } else {
          nextIndex = images.length - 1;
        }
      }
      setSelectedIndex(nextIndex);
      setSelectedImage(images[nextIndex]);
    }, 1000);
  }

  const previous = () => {
    selectNewImage(selectedIndex, props.images, false);
  }

  const next = () => {
    selectNewImage(selectedIndex, props.images);
  }

  return (
    <div className='mt-3'>
      <h3 className='ms-5'>{props.title}</h3>
      <div className='d-flex flex-column align-items-center mt-3'>
        <div className='img-container'>
          <img className={loaded ? "img-carrusel__loaded img-fluid px-4" : "img-carrusel img-fluid px-4"} src={require(`./img/${selectedImage}`)} onLoad={() => {setLoaded(true)}} />
        </div>
        
        <div className='mt-3'>
          <button className='btn btn-dark mx-2' onClick={previous}>{'<'}</button>
          <button className='btn btn-dark mx-2' onClick={next}>{'>'}</button>
        </div>
      </div>
    </div>
    
  )
}

export default Carrusel
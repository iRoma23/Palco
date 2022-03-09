import React, { useState } from 'react'

const Carrusel = () => {
  const images = ['01.jpg', '02.jpg', '03.jpg'];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const selectNewImage = (index, images, next = true) => {
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
  }

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  }

  const next = () => {
    selectNewImage(selectedIndex, images);
  }

  return (
    <div>
      <img src={require(`./img/${selectedImage}`)} />
      <button onClick={previous}>{'<'}</button>
      <button onClick={next}>{'>'}</button>
    </div>
    
  )
}

export default Carrusel
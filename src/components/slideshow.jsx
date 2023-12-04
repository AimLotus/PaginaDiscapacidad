import React, { useState, useEffect } from 'react';
import home1 from '../media/home1.webp';
import home2 from '../media/home2.webp';
import home3 from '../media/home3.webp';

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const cambiarSlide = (n) => {
    mostrarSlide(slideIndex + n);
  };

  const mostrarSlide = (n) => {
    const slides = document.getElementsByClassName('slide');

    if (n >= slides.length) {
      setSlideIndex(0);
    } else if (n < 0) {
      setSlideIndex(slides.length - 1);
    } else {
      setSlideIndex(n);
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = i === slideIndex ? 'block' : 'none';
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => cambiarSlide(1), 5000);

    return () => clearInterval(intervalId);
  }, [slideIndex]);

  return (
    <div className="carrusel">
      <button id="anterior" className="btn-flecha" onClick={() => cambiarSlide(-1)}>
        &#9664;
      </button>
      <div className="slide home1">
        {/* Contenido del Slide 1 */}
        <img src={home1} alt="Imagen 1" />
      </div>
      <div className="slide">
        {/* Contenido del Slide 2 */}
        <img src={home2} alt="Imagen 2" />
      </div>
      <div className="slide">
        {/* Contenido del Slide 3 */}
        <img src={home3} alt="Imagen 3" />
      </div>
      <button id="siguiente" className="btn-flecha" onClick={() => cambiarSlide(1)}>
        &#9654;
      </button>
    </div>
  );
};

export default Slideshow;
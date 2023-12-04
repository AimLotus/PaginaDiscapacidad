import React from 'react';
import Slideshow from './slideshow';
import './home.css';

const Home = () => {
  return (
    <>
      <Slideshow />
      <h2 className="divh2">Programa de seguimiento para personas con discapacidad</h2>
      <div className="container">
        <h2 className="homeh2">Visión</h2>
        <p>
          Ser una Universidad acreditada nacional e internacionalmente, con calidad y pertinencia al
          contexto regional y nacional.
        </p>
        <h2 className="homeh2">Misión</h2>
        <p>
          Formar profesionales competentes y emprendedores a través de la articulación de las funciones
          sustantivas, acreditando oferta académica de grado, postgrado, técnicas y tecnológicas, para
          contribuir al desarrollo integral de los territorios.
        </p>
      </div>
    </>
  );
};

export default Home;
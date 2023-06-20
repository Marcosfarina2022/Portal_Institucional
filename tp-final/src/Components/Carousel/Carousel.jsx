import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagen1 from '../../Imgenes/imagen1.png';
import imagen2 from '../../Imgenes/imagen2.png';
import imagen3 from '../../Imgenes/imagen3.png';
import './Carousel.css';

function Carrusel() {
  return (
    <Carousel className='carousell' fade>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imagen1}
          alt="First slide"
        />
        <Carousel.Caption className="caption">
          <h3>Te damos la bienvenida a nuestro hermoso club</h3>
          <p>Si quieres conocer sobre nosotros, puedes visitar nuestro apartado "Institución", donde podrás conocer nuestra historia desde el comienzo.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imagen2}
          alt="Second slide"
        />
        <Carousel.Caption className="caption">
          <h3>Ya conoces los deportes del club?</h3>
          <p>Puedes visitar nuestra sección "Disciplinas" en la pestaña de la barra superior.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={imagen3}
          alt="Third slide"
        />
        <Carousel.Caption className="caption">
          <h3>¿Queres ser parte de nuestro club?</h3>
          <p> De esta forma podrás defender con orgullo nuestros colores</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;

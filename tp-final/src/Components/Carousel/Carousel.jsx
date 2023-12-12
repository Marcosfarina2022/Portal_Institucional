import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
const imagen1 = 'https://i.ibb.co/n3WCXmV/imagen1.png';
const imagen2 = 'https://i.ibb.co/9hFQrgR/imagen2.png';
const imagen3 = 'https://i.ibb.co/Tv7mK7y/imagen3.png';
const captions = [
  {
    title: 'Te damos la bienvenida a nuestro hermoso club',
    text: 'Si quieres conocer sobre nosotros, puedes visitar nuestro apartado "Institución", donde podrás conocer nuestra historia desde el comienzo.',
    image: imagen1
  },
  {
    title: 'Ya conoces los deportes del club?',
    text: 'Puedes visitar nuestra sección "Noticias" en la pestaña de la barra superior.',
    image: imagen2
  },
  {
    title: '¿Queres ser parte de nuestro club?',
    text: 'De esta forma podrás defender con orgullo nuestros colores',
    image: imagen3
  }
];

function Carrusel() {
  return (
    <Carousel fade className='carousell'>
      {captions.map((caption, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 carousel-image"
            src={caption.image}
            alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption className="caption">
            <h3>{caption.title}</h3>
            <p>{caption.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carrusel;

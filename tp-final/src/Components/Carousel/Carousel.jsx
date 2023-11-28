import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container} from 'react-bootstrap';
import imagen1 from "../../Imagenes/imagenesCarrousell/imagen1-atardecer.png";
import imagen2 from "../../Imagenes/imagenesCarrousell/imagen2-femenino.png";
import imagen3 from "../../Imagenes/imagenesCarrousell/imagen3-masculinos.png";
import "./Carousel.css";

const captions = [
  {
    title: "Te damos la bienvenida a nuestro hermoso club",
    text: 'Si quieres conocer sobre nosotros, puedes visitar nuestro apartado "Institución", donde podrás conocer nuestra historia desde el comienzo.',
    image: imagen1,
  },
  {
    title: "Ya conoces los deportes del club?",
    text: 'Puedes visitar nuestra sección "Noticias" en la pestaña de la barra superior.',
    image: imagen2,
  },
  {
    title: "¿Queres ser parte de nuestro club?",
    text: "De esta forma podrás defender con orgullo nuestros colores",
    image: imagen3,
  },
];

function Carrusel() {
  return (
    <Container className="container-carrousel">
      <Carousel fade className="carrousel">
        {captions.map((caption, index) => (
          // Elemento individual del carrusel con clave única y clase 'carrousel-item'
          <Carousel.Item key={index} className="carrousel-item">
            {/* Imagen del carrusel con clase 'carousel-image' */}
            <img
              className="carrousel-img"
              src={caption.image}
              alt={`Slide ${index + 1}`}
            />
            {/* Leyenda del carrusel con clase 'caption' */}
            <Carousel.Caption className="caption">
              {/* Título de la leyenda con clase 'caption-title' */}
              <h3 className="caption-title">{caption.title}</h3>
              {/* Texto de la leyenda con clase 'caption-text' */}
              <p className="caption-text">{caption.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Carrusel;

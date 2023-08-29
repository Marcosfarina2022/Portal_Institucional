import React from 'react';
import { Container, Card, Button, Col, Row } from 'react-bootstrap';
import VideoPlayer from '../Video/Video';
import Image1 from '../../Imagenes/imgNoticias/1.svg';
import Image2 from '../../Imagenes/imgNoticias/2.svg';
import Image3 from '../../Imagenes/imgNoticias/3.svg';
import sidebar1 from '../../Imagenes/imgNoticias/sidebar1.svg';
import './cards.css';

const cardData = [
  {
    image: Image1,
    title: 'Águilas Jr',
    descripcion: 'Nuestra escuela de rugby para niños ofrece una experiencia deportiva divertida y educativa.',
  },
  {
    image: Image2,
    title: 'Hockey Femenino',
    descripcion: 'El equipo de hockey femenino del club ha tenido una destacada participación...',
  },
  {
    image: Image3,
    title: 'Noticia 3',
    descripcion: 'Contenido de la noticia 3.',
  },
  {
    image: Image3,
    title: 'Noticia 4',
    descripcion: 'Contenido de la noticia 4.',
  },
];

const Cards = () => {
  return (
    <Container fluid className='contenedor'>
      <Row>
        {cardData.map((card, index) => (
          <Col md='6' key={index}>
            <Card className='card'>
              <Card.Body className='cardBody'>
                <Card.Title className='cardTitle'>{card.title}</Card.Title>
                <Card.Subtitle className='cardSubtitle'>{card.descripcion}</Card.Subtitle>
                <Card.Img className='cardImg' variant='top' src={card.image} />
                <Card.Text>{card.text}</Card.Text>
                <Button variant="dark" className='colorBoton'>Leer más...</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Col>
          <Card className='sideBar'>
            <Card.Body>
              <Card.Img variant="top" src={sidebar1} className="img-fluid imgSideBar" />
              <Card.Text className='cardText'>
                Contenido del sidebar.
              </Card.Text>
              <Button variant="dark" className='colorBoton'>Leer más...</Button>
            </Card.Body>
          </Card>
          <VideoPlayer />
           </Col>
      </Row>
    </Container>
  );
}

export default Cards;

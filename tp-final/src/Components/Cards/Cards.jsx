import React from 'react';
import { Container, Card, Button, Col, Row } from 'react-bootstrap';
import VideoPlayer from '../Video/Video';
import Image1 from '../../Imagenes/imgNoticias/1.svg';
import Image2 from '../../Imagenes/imgNoticias/2.svg';
import Image3 from '../../Imagenes/imgNoticias/3.svg';
import Image4 from '../../Imagenes/imgNoticias/3.svg';
import sidebar1 from '../../Imagenes/imgNoticias/sidebar1.svg';
import './cards.css';

const Cards = () => {
  const cardData = [
    {
      image: Image1,
      title: 'Águilas Jr',
      text: 'Nuestra escuela de rugby para niños ofrece una experiencia divertida y educativa...',
    },
    {
      image: Image2,
      title: 'Hockey Femenino Adulto',
      text: 'El equipo de hockey femenino del club ha tenido una destacada participación...',
    },
    {
      image: Image3,
      title: 'Águilas Juveniles',
      text: 'Nuestros jovenes tienen sentido de pertenencia con el club...',
    },
    {
      image: Image3,
      title: 'Águilas Campeones',
      text: 'Nuestras categorias se destacaron en todas...',
    },
  ];

  return (
    <Container fluid>
      <Row className='row-contenedor'>    
        <Col>        
          {cardData.slice(0, 2).map((card, index) => (

            <Card className='card-home' key={index}>
              <Card.Body>
                <Card.Img variant="top" src={card.image} className="img-fluid" />
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant="dark" className='colorBoton'>Leer más...</Button>
              </Card.Body>
            </Card>
          ))}
        </Col>   
        <Col>
          {cardData.slice(2, 4).map((card, index) => (
            <Card className='card-home' key={index}>
              <Card.Body>
                <Card.Img variant="top" src={card.image} className="img-fluid" />
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant="dark" className='colorBoton'>Leer más...</Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col>
          <aside>
            <Card className='card-aside'>
              <Card.Body className='card-body-aside-home'>
                <Card.Img variant="top" src={sidebar1} style={{ height: '29rem' }} className="img-fluid" />
                <Card.Text>Contenido del sidebar.</Card.Text>
                <Button variant="dark" className='colorBoton'>Leer más...</Button>
              </Card.Body>
            </Card>
            {/* VideoPlayer */}
            <VideoPlayer />
          </aside>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;

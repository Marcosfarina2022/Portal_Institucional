import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import VideoPlayer from '../Video/Video';
import { Col, Row } from 'react-bootstrap';
import imgInfantil1 from '../../Imgenes/imgNoticias/1.svg';
import Image2 from '../../Imgenes/imgNoticias/2.svg';
import Image3 from '../../Imgenes/imgNoticias/3.svg';
import sidebar1 from '../../Imgenes/imgNoticias/sidebar1.svg';
import './cards.css';

const Cards = () => {
  const cardData = [
    {
      image: imgInfantil1,
      title: 'Águilas Jr',
      text: 'Nuestra escuela de rugby para niños ofrece una experiencia deportiva divertida y educativa.',
    },
    {
      image: Image2,
      title: 'Hockey Femenino',
      text: 'El equipo de hockey femenino del club ha tenido una destacada participación...',
    },
    {
      image: Image3,
      title: 'Noticia 3',
      text: 'Contenido de la noticia 3.',
    },
    {
      image: Image3,
      title: 'Noticia 4',
      text: 'Contenido de la noticia 4.',
    },
  ];

  return (
    <div className='contenedor'>
      <Col md={7}>
        <Row className='cardFila1'>
          {cardData.slice(0, 2).map((card, index) => (
            <Col md={6} key={index}>
              <Card style={{ width: '23rem' }}>
                <Card.Body>
                  <Card.Img variant="top" src={card.image} className="img-fluid" />
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                  <Button variant="dark" className='colorBoton'>Leer más...</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className='cardFila2'>
          {cardData.slice(2, 4).map((card, index) => (
            <Col md={6} key={index}>
              <Card style={{ width: '23rem' }}>
                <Card.Body>
                  <Card.Img variant="top" src={card.image} className="img-fluid" />
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                  <Button variant="dark" className='colorBoton'>Leer más...</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
      <Col md={4}>
        {/*Sidebar*/}
        <Card style={{ height: '35rem', width: '26rem', margin: '10px' }} className='sidebar'>
          <Card.Body>
            <Card.Title>Sidebar</Card.Title>
            <Card.Img variant="top" src={sidebar1} style={{ height: '24rem' }} className="img-fluid" />
            <Card.Text>Contenido del sidebar.</Card.Text>
            <Button variant="dark" className='colorBoton'>Leer más...</Button>
          </Card.Body>
        </Card>
        <div style={{ width: '26rem', height:'auto', margin: '10px', marginTop:'25px' }}>
          {/* VideoPlayer */}
          <VideoPlayer />
        </div>
      </Col>
    </div>
  );
}

export default Cards;

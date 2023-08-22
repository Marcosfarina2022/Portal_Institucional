import React from 'react';
import { Container, Card, Button, Col, Row } from 'react-bootstrap';
import VideoPlayer from '../Video/Video';
import Image1 from '../../Imagenes/imgNoticias/1.svg';
import Image2 from '../../Imagenes/imgNoticias/2.svg';
import Image3 from '../../Imagenes/imgNoticias/3.svg';
import sidebar1 from '../../Imagenes/imgNoticias/sidebar1.svg';
import './cards.css';
const Cards = () => {
  const cardData = [
    {
      image: Image1,
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
    <Container fluid>
      <Row className='row-contenedor'> 
      <div className='padre'>   
        <div className='hijoUno'>
          <Col>        
          {cardData.slice(0, 2).map((card, index) => (

            <Card key={index}>
              <Card.Body>
                <Card.Img variant="top" src={card.image} className="img-fluid" />
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant="dark" className='colorBoton'>Leer más...</Button>
              </Card.Body>
            </Card>
          ))}
        </Col>   
        </div>

        <div className='hijoDos'>
        <Col>
          {cardData.slice(2, 4).map((card, index) => (
            <Card key={index}>
              <Card.Body>
                <Card.Img variant="top" src={card.image} className="img-fluid" />
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant="dark" className='colorBoton'>Leer más...</Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
        </div>
       <div className='hijoTres'>
       <Col>
          <aside>
            <Card className='card-aside'>
              <Card.Body className='card-body-aside'>
                <Card.Img variant="top" src={sidebar1} style={{ height: '30rem' }} className="img-fluid" />
                <Card.Text>Contenido del sidebar.</Card.Text>
                <Button variant="dark" className='colorBoton'>Leer más...</Button>
              </Card.Body>
            </Card>
           
            {/* VideoPlayer */}
            <VideoPlayer />
            
          </aside>
        </Col>
       
       </div>
      </div>
      </Row>
    </Container>
  );
}

export default Cards;




import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image1 from '../../Imgenes/imgNoticias/1.svg';
import Image2 from '../../Imgenes/imgNoticias/2.svg';
import Image3 from '../../Imgenes/imgNoticias/3.svg';
import sidebar1 from '../../Imgenes/imgNoticias/sidebar1.svg';
import './cards.css';
import { Col, Row, Image, Nav } from 'react-bootstrap';

const Cards= () => {
  return (<> 
    <Row className='contenedor'>
      <Col md={8}>
        <Row>
          <Col md={6}>
            {/*Card numero 1*/}
            <Card style={{ width: '22rem' }}>
              <Card.Body>
              <Card.Img variant="top" src={Image1} className="img-fluid"/>
                <Card.Title>Águilas Jr</Card.Title>
                <Card.Text>Nuestra escuela de rugby para niños ofrece una experiencia deportiva divertida y educativa.</Card.Text>
                <Button variant="primary">Leer más...</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
           {/*Card numero 2*/}
            <Card style={{ width: '22rem' }}>
              <Card.Body>
              <Card.Img variant="top" src={Image2} className="img-fluid"/>
                <Card.Title>Hockey Femenino</Card.Title>
                <Card.Text>El equipo de hockey femenino del club ha tenido una destacada participación en los últimos torneos.</Card.Text>
                <Button variant="primary">Leer más...</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='cardFila2'>
          <Col md={6}>
            {/*Card numero 3*/}
            <Card style={{ width: '22rem' }}>
              <Card.Body>
              <Card.Img variant="top" src={Image3} className="img-fluid"/>
                <Card.Title>Noticia 3</Card.Title>
                <Card.Text>Contenido de la noticia 3.</Card.Text>
                <Button variant="primary">Leer más...</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            {/*Card numero 4*/}
            <Card style={{ width: '22rem' }}>
              <Card.Body>
              <Card.Img variant="top" src={Image3} className="img-fluid"/>
                <Card.Title>Noticia 4</Card.Title>
                <Card.Text>Contenido de la noticia 4.</Card.Text>
                <Button variant="primary">Leer más...</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col md={4}>
        {/*Sidebar*/}
        <Card>
          <Card.Body>
            <Card.Title>Sidebar</Card.Title>
            <Card.Img variant="top" src={sidebar1}/>
            <Card.Text>Contenido del sidebar.</Card.Text>
            <Button variant="primary">Leer más...</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </>)
}

export default Cards;
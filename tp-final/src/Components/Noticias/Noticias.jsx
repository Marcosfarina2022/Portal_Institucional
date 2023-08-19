import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import noticia1 from '../../Imagenes/imgNoticias/1.svg';
import noticia2 from '../../Imagenes/imgNoticias/2.svg';
import noticia3 from '../../Imagenes/imgNoticias/3.svg';
import noticia4 from '../../Imagenes/imgNoticias/3.svg';
import './noticias.css';

const noticias = [
  {
    nombre: 'Juveniles',
    foto: noticia1,
    linkNoticia: 'https://www.diarioprensa.com.ar/el-club-las-aguilas-sumo-un-nuevo-titulo/',
    descripcion: ['En una cancha colmada de público, el equipo local se hizo fuerte venciendo por 40-21 al Ushuaia Rugby Club en la gran final del Torneo Apertura de la Unión de Rugby de Tierra del Fuego. De esta manera, las camisetas fucsia suman su cuarto título en fila y el sexto en los últimos siete campeonatos.'],
  },
  {
    nombre: 'Adultos',
    foto: noticia2,
    linkNoticia: 'https://www.linkedin.com/in/farina-marcos-1063a271/',
    descripcion: ['', '', ''],
  },
  {
    nombre: 'Hockey Juvenil',
    foto: noticia3,
    linkNoticia: 'https://www.linkedin.com/in/diaz-fernando/',
    descripcion: ['blaaa'],
  },
  {
    nombre: 'Hockey Adultos',
    foto: noticia4,
    linkNoticia: 'https://www.linkedin.com/perfil-miembro-2',
    descripcion: [''],
  },
];

const Noticias = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <Container className='containerSobreNosotros text-center'>
      <Row>
        <h1>Te damos la Bienvenida a la sección noticias</h1>
        <Col className='text-start'>
          <h5>Aquí podras encontrar la ultima info del club</h5>
        </Col>
      </Row>
      <Row>
        {noticias.map((noticia, index) => (
          <Col key={index} xs={12} md={4} className='mt-4 mb-4'>
            <Card className='cardMiembros'>
              <Card.Body className='cardBody'>
                <animated.div style={fadeIn}>
                  <Card.Title className='cardTitle'>{noticia.nombre}</Card.Title>
                  <Card.Subtitle className='cardSubtitle'>
                    <ul className='text-start'>
                      {noticia.descripcion.map((descripcion, i) => (
                        <li key={i}>{descripcion}</li>
                      ))}
                    </ul>
                  </Card.Subtitle>
                  <Card.Img className='cardImg' variant='top' src={noticia.foto} />
                  <Link
                    to={noticia.linkNoticia}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='cardLink'
                  >
                    Ver más
                  </Link>
                </animated.div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Noticias;
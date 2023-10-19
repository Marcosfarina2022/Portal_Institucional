<<<<<<< HEAD
import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

import noticia1 from '../../Imagenes/imgNoticias/1.svg';
import noticia2 from '../../Imagenes/imgNoticias/2.svg';
import noticia3 from '../../Imagenes/imgNoticias/3.svg';
import noticia4 from '../../Imagenes/imgNoticias/4.jpeg';
import noticia5 from '../../Imagenes/imgNoticias/5.jpeg';
import noticia6 from '../../Imagenes/imgNoticias/6.jpeg';

const noticiasData = [
  {
    nombre: 'Noticia 1',
    categoria: 'Categoria1',
    descripcion: 'Descripción de la noticia 1',
    foto: noticia1,
    linkNoticia: '/noticia/Rugby-Juveniles',
    
  },
  {
    nombre: 'Noticia 2',
    categoria: 'Categoria2',
    descripcion: 'Descripción de la noticia 2',
    foto: noticia1,
    linkNoticia: '/noticia/2',
    
  },
  {
    nombre: 'Noticia 3',
    categoria: 'Categoria 3',
    descripcion: 'Descripción de la noticia 3',
    foto: noticia1,
    linkNoticia: '/noticia/3',
    
  },
  // Agrega más noticias aquí
];

const CategoriasDropdown = ({ categoriaSeleccionada, setCategoriaSeleccionada }) => (
  <NavDropdown
    title={`Categoría: ${categoriaSeleccionada}`}
    onSelect={(eventKey) => setCategoriaSeleccionada(eventKey)}
  >
    <NavDropdown.Item eventKey='Rugby-Juveniles'>Rugby-Juveniles</NavDropdown.Item>
    <NavDropdown.Item eventKey='Rugby-Adultos'>Rugby-Adultos</NavDropdown.Item>
    <NavDropdown.Item eventKey='Hockey-Juveniles'>Hockey-Juveniles</NavDropdown.Item>
    {/* Agrega más categorías según tus necesidades */}
  </NavDropdown>
);

const NoticiaCard = ({ noticia }) => {
  const fadeIn = useSpring({
=======
import { Container, Row, Col, Card } from 'react-bootstrap';
//import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import './noticias.css';
import { useSpring, animated } from 'react-spring';

import noticia1 from '../../Imagenes/imgNoticias/1.svg';
import noticia2 from '../../Imagenes/imgNoticias/2.svg';
import noticia3 from '../../Imagenes/imgNoticias/3.svg';
import noticia4 from '../../Imagenes/imgNoticias/4.jpeg';
import noticia5 from '../../Imagenes/imgNoticias/5.jpeg';
import noticia6 from '../../Imagenes/imgNoticias/6.jpeg';

const noticias = [
  {
    nombre: 'Noticia 1',
    foto: noticia1,
    linkNoticia: 'https://www.diarioprensa.com.ar/el-club-las-aguilas-sumo-un-nuevo-titulo/',
    descripcion: 'Descripcion de la noticia 1',
  },
  {
    nombre: 'Noticia 2',
    foto: noticia2,
    linkNoticia: 'https://www.linkedin.com/in/farina-marcos-1063a271/',
    descripcion: 'Descripción de la noticia 2.',
  },
  {
    nombre: 'Noticia 3',
    foto: noticia3,
    linkNoticia: 'https://www.linkedin.com/in/diaz-fernando/',
    descripcion: 'Descripción de la noticia 3.',
  },
  {
    nombre: 'Noticia 4',
    foto: noticia4,
    linkNoticia: 'https://www.linkedin.com/perfil-miembro-4',
    descripcion: 'Descripción de la noticia 4.',
  },
  {
    nombre: 'Noticia 5',
    foto: noticia5,
    linkNoticia: 'https://www.linkedin.com/perfil-miembro-5',
    descripcion: 'Descripción de la noticia 5.',
  },
  {
    nombre: 'Noticia 6',
    foto: noticia6,
    linkNoticia: 'https://www.linkedin.com/perfil-miembro-6',
    descripcion: 'Descripción de la noticia 6.',
  },
];

const Noticias = () => {
  /*const fadeIn = useSpring({
>>>>>>> origin/testing-backend
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });*/
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 }, // Ajusta la duración de la animación
  });

<<<<<<< HEAD
  return (
    <Col xs={12} md={4} className='mt-4 mb-4'>
      <Card className='cardMiembros'>
        <Card.Body className='cardBody'>
          <animated.div style={fadeIn}>
            <Card.Title className='cardTitle'>{noticia.nombre}</Card.Title>
            <Card.Subtitle className='cardSubtitle'>
              <p className='text-start'>{noticia.descripcion}</p>
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
  );
};

const Noticias = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  return (
    <Container className='containerSobreNosotros text-center'>
      <Row>
        <h1>Últimas noticias</h1>
      </Row>
      <Row>
        {noticiasData.map((noticia, index) => (
          (categoriaSeleccionada === 'Todas' || noticia.categoria === categoriaSeleccionada) ? (
            <NoticiaCard key={index} noticia={noticia} />
          ) : null
=======
  return (
    <Container className='containerNoticias text-center fluid'>
      <Row>
        <h1>Ultimas noticias</h1>
      </Row>
      <Row className='rowNoticias'>
        {noticias.map((noticia, index) => (
          <Col key={index} xs={12} md={4} className='mt-4 mb-4'> 
            <Card className='cardNoticias'>
              <Card.Body className='cardBodyNoticias'>
                <animated.div style={fadeIn}>
                  <Card.Title className='cardTitleNoticias'>{noticia.nombre}</Card.Title>
                  <Card.Subtitle className='cardSubtitleNoticias'>
                    <p className='text-center'>{noticia.descripcion}</p>
                  </Card.Subtitle>
                  <Link  to={noticia.linkNoticia}target='_blank'rel='noopener noreferrer'className='cardLink'>
                  <Card.Img className='cardImgNoticias' variant='top' src={noticia.foto} />
                  </Link>
                </animated.div>
              </Card.Body>
            </Card>
          </Col>
>>>>>>> origin/testing-backend
        ))}
        <CategoriasDropdown
          categoriaSeleccionada={categoriaSeleccionada}
          setCategoriaSeleccionada={setCategoriaSeleccionada}
        />
      </Row>
    </Container>
  );
};

export default Noticias;
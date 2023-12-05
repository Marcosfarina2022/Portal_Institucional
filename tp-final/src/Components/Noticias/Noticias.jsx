<<<<<<< HEAD
import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import RugbyAdultos from "./RugbyAdultos";
import RugbyJuveniles from "./RugbyJuveniles";
import HockeyAdultos from "./HockeyAdultos";
import HockeyJuveniles from "./HockeyJuveniles";
import "./noticias.css";

const Noticias = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  let noticiasFiltradas;

  if (categoriaSeleccionada === "rugby-adultos") {
    noticiasFiltradas = RugbyAdultos;
  } else if (categoriaSeleccionada === "rugby-juveniles") {
    noticiasFiltradas = RugbyJuveniles;
  } else if (categoriaSeleccionada === "hockey-adultos") {
    noticiasFiltradas = HockeyAdultos;
  } else if (categoriaSeleccionada === "hockey-juveniles") {
    noticiasFiltradas = HockeyJuveniles;
  } else {
    // Si no se selecciona una categoría, se muestran todas las noticias
    noticiasFiltradas = [
      ...RugbyAdultos,
      ...HockeyJuveniles,
      ...HockeyAdultos,
      ...RugbyJuveniles,
    ];
  }

  return (
    <Container className="text-center">
      <Row>
        <h1>Te damos la Bienvenida a la sección noticias</h1>
        <Col className="text-center">
          <h5>Aquí podrás encontrar la última información del club</h5>
        </Col>
      </Row>
      <Row>
        {noticiasFiltradas.map((noticia, index) => (
          <Col key={index} xs={12} md={4} className="mt-4 mb-4">
            <Card className="cardMiembros">
              <Card.Body className="cardBody">
                <animated.div style={fadeIn}>
                  <Card.Title className="cardTitle">
                    {noticia.titulo_noticia}
                  </Card.Title>
                  <Card.Subtitle className="cardSubtitle">
                    <ul className="text-start">
                      {noticia.descripcion.map((descripcion, i) => (
                        <li key={i}>{descripcion}</li>
                      ))}
                    </ul>
                  </Card.Subtitle>
                  <Card.Img
                    className="cardImg"
                    variant="top"
                    src={noticia.foto}
                  />
                  <Link
                    to={noticia.linkNoticia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cardLink"
                  >
                    Ver más
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
import { useEffect, useState } from 'react';

const noticias = [
  {
    nombre: 'Noticia 1',
    foto: noticia1,
    linkNoticia: 'https://www.diarioprensa.com.ar/el-club-las-aguilas-sumo-un-nuevo-titulo/',
    descripcion: 'Descripcion de la noticia 1',
    categoria: '1'
  },
  {
    nombre: 'Noticia 2',
    foto: noticia2,
    linkNoticia: 'https://www.linkedin.com/in/farina-marcos-1063a271/',
    descripcion: 'Descripción de la noticia 2.',
    categoria: '2'
  },
  {
    nombre: 'Noticia 3',
    foto: noticia3,
    linkNoticia: 'https://www.linkedin.com/in/diaz-fernando/',
    descripcion: 'Descripción de la noticia 3.',
    categoria: '3'
  },
  {
    nombre: 'Noticia 4',
    foto: noticia4,
    linkNoticia: 'https://www.linkedin.com/perfil-miembro-4',
    descripcion: 'Descripción de la noticia 4.',
    categoria: '1'
  },
  {
    nombre: 'Noticia 5',
    foto: noticia5,
    linkNoticia: 'https://www.linkedin.com/perfil-miembro-5',
    descripcion: 'Descripción de la noticia 5.',
    categoria: '4'
  },
  {
    nombre: 'Noticia 6',
    foto: noticia6,
    linkNoticia: 'https://www.linkedin.com/perfil-miembro-6',
    descripcion: 'Descripción de la noticia 6.',
    categoria: '3'
  },

];



const Noticias = (props) => {
  /*const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });*/
  const [filtro,setFiltro]= useState('');
  const noticiasFiltradas = noticias.filter(element => element.categoria === filtro)
  
  useEffect(()=>{
    setFiltro(props.categoria)
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 }, // Ajusta la duración de la animación
  });

  return (
    <Container className='containerNoticias text-center fluid'>
      <Row>
        <h1>Ultimas noticias</h1>
      </Row>
      <Row className='rowNoticias'>
        {noticiasFiltradas.map((noticia, index) => (
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
>>>>>>> origin/testing-backend
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

<<<<<<< HEAD
export default Noticias;
=======
export default Noticias;
>>>>>>> origin/testing-backend

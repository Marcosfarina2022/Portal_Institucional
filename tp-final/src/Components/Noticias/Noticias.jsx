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
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });*/
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
        {noticias.map((noticia, index) => (
          <Col key={index} xs={12} md={4} className='mt-4 mb-4'>
            <Card className='cardNoticias'>
              <Card.Body className='cardBodyNoticias'>
                <animated.div style={fadeIn}>
                  <Card.Title className='cardTitleNoticias'>{noticia.nombre}</Card.Title>
                  <Card.Subtitle className='cardSubtitleNoticias'>
                    <p className='text-start'>{noticia.descripcion}</p>
                  </Card.Subtitle>
                  <Card.Img className='cardImgNoticias' variant='top' src={noticia.foto} />
                  <Link
                    to={noticia.linkNoticia}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='cardLink'
                  >
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
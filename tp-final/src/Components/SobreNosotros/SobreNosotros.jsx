import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import imgMelina from '../../Imagenes/imgSobreNosotros/melina.jpg';
import imgMarcos from '../../Imagenes/imgSobreNosotros/marcos.JPG';
import imgFernando from '../../Imagenes/imgSobreNosotros/fernando.jpeg';
import './sobreNosotros.css';

const equipoDesarrollo = [
    {
        nombre: 'Melina Gabriela Figueroa',
        foto_perfil: imgMelina,
        linkedin: 'https://www.linkedin.com/in/melinagfigueroa/',
        descripcion: 'Desarrolladora Full Stack | UX UI Designer'
    },
    {
        nombre: 'Marcos Farina',
        foto_perfil: imgMarcos,
        linkedin: 'https://www.linkedin.com/in/farina-marcos-1063a271/',
        descripcion: 'Desarrollador Full Stack'
    },
    {
        nombre: 'Fernando Andres Diaz',
        foto_perfil: imgFernando,
        linkedin: 'https://www.linkedin.com/in/diaz-fernando/',
        descripcion: 'Desarrollador Full Stack'
    },
    {
        nombre: 'Nicolas Vega',
        foto_perfil: 'ruta-de-la-imagen-3.jpg',
        linkedin: 'https://www.linkedin.com/perfil-miembro-2',
        descripcion: 'Desarrollador Full Stack'
    },
    {
        nombre: 'Kevin Santander',
        foto_perfil: 'ruta-de-la-imagen-4.jpg',
        linkedin: 'https://www.linkedin.com/perfil-miembro-1',
        descripcion: 'Desarrollador Full Stack'
    },
    {
        nombre: 'Guido',
        foto_perfil: 'ruta-de-la-imagen-5.jpg',
        linkedin: 'https://www.linkedin.com/perfil-miembro-2',
        descripcion: 'Desarrollador Full Stack'
    }
];

const SobreNosotros = () => {
    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 500 }
    });

    return (
        <Container className='text-center'>
            <Row>
                <h1>Equipo de Mentes Dementes</h1>
                <Col className='text-start'>
                    <h5>Somos un grupo de desarrollo con experiencia en:</h5>
                    <ul>
                        <li>Desarrollo web</li>
                        <li>Diseño de interfaces de usuario</li>
                        <li>Programación backend</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                {equipoDesarrollo.map((miembro, index) => (
                    <Col key={index} xs={12} md={4} className='mt-4 mb-4'>
                        <Card>
                            <Card.Body>
                                <animated.div style={fadeIn}>
                                    <Card.Title>{miembro.nombre}</Card.Title>
                                    <Card.Subtitle>{miembro.descripcion}</Card.Subtitle>
                                    <Card.Img variant='top' src={miembro.foto_perfil} />
                                    <a
                                        href={miembro.linkedin}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Perfil de LinkedIn
                                    </a>
                                </animated.div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default SobreNosotros;
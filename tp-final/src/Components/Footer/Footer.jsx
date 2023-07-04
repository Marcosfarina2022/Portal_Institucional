import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import logoCLA from '../../Imgenes/imagenes-Header-Footer/logoCla.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="glow"></div>
      <Container> 
        <Row className="align-items-center justify-content-around">
          <Col >
            <div className='div-logo'>
                <Link to="/">
                    <img className='logo' href={"/"} src={logoCLA} alt="Logo"/>  
                </Link>        
            </div>     
            </Col>  
            <Col >
            <p className='titulo'>El club familiar de Rugby y Hockey más austral del mundo</p>
          </Col>
          <Col className="text-center text-sm-end">
            <div className="div-redes">
              <div className="titulo-redes">Nuestro club en redes</div>
              <div className="redes">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/clublasaguilas/"
                  title="Instagram"
                >
                  <FaInstagram color="black" size={24} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/clublasaguilasushuaia/?locale=es_LA"
                  title="Facebook"
                >
                  <FaFacebook color="black" size={24} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/@clublasaguilas-analisisdev8566"
                  title="Youtube"
                >
                  <FaYoutube color="black" size={24} />
                </a>
              </div>
            </div>
            <div className="text-center text-sm-end">
              <Link className="link-contacto" to="/contacto">
                Contáctanos
              </Link>
            </div>
          </Col>
          <Col xs={12} className="text-center">
            <p>&copy; 2023 - MentesDeMentes</p>
          </Col> 
          </Row>
      </Container>
    </footer>
  );
};

export default Footer;

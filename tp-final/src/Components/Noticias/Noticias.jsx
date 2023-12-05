import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import RugbyAdultos from "./rugbyAdultos";
import RugbyJuveniles from "./rugbyJuveniles";
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

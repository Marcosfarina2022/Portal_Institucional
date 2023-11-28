import React from "react";
import { Container, Card, Button, Col, Row } from "react-bootstrap";
import VideoPlayer from "../Video/Video";
import Image1 from "../../Imagenes/imgNoticias/1.svg";
import Image2 from "../../Imagenes/imgNoticias/2.svg";
import Image3 from "../../Imagenes/imgNoticias/3.svg";
import sidebar1 from "../../Imagenes/imgNoticias/sidebar1.svg";
import "./cards.css";
import { Link } from "react-router-dom";
const Cards = () => {
  const cardData = [
    {
      image: Image1,
      title: "Águilas Jr",
      text: "Nuestra escuela de rugby para niños ofrece una experiencia divertida y educativa...",
    },
    {
      image: Image2,
      title: "Hockey Femenino Adulto",
      text: "El equipo de hockey femenino del club ha tenido una destacada participación...",
    },
    {
      image: Image3,
      title: "Águilas Juveniles",
      text: "Nuestros jovenes tienen sentido de pertenencia con el club...",
    },
    {
      image: Image3,
      title: "Águilas Campeones",
      text: "Nuestras categorias se destacaron en todas...",
    },
  ];

  return (
    <Container className="container-card">
      {/* Contenido de cada tarjeta de noticia */}
      <section className="noticias-seccion">
        {cardData.map((card, index) => (
          <Card key={index} className="card-noticia">
            <h5 className="titulo-nombre">{card.title}</h5>
            <Card.Img variant="top" src={card.image} className="imagen-foto" />
            <p>{card.text}</p>
            <Button className="boton">
                Leer más...
            </Button>
          </Card>
        ))}
      </section>
      {/* Contenido de sidebar */}
      <section className="sidebar-seccion">
      <Card className="card-sidebar">
        <Card.Img variant="top" src={sidebar1} className="imagen-sidebar"/>
        <Button className="boton">
          Leer más...
        </Button>
        </Card>
        </section>
      {/* VideoPlayer */}
    {/* <section>
      <VideoPlayer />
        </section> */}
</Container>
  );
};

export default Cards;
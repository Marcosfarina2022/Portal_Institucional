import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { animated, useSpring } from "@react-spring/web";
import imgMelina from "../../Imagenes/imgSobreNosotros/foto-perfil-melina.svg";
import imgMarcos from "../../Imagenes/imgSobreNosotros/foto-perfil-marcos.svg";
import imgGuido from "../../Imagenes/imgSobreNosotros/foto-perfil-guido.svg";
import imgNico from '../../Imagenes/imgSobreNosotros/foto-perfil-nico.svg';
import imgKevin from '../../Imagenes/imgSobreNosotros/foto-perfil-kevin.svg';
import imgFernando from '../../Imagenes/imgSobreNosotros/foto-perfil-fer.svg'
import imgEma from '../../Imagenes/imgSobreNosotros/foto-perfil-ema.svg'
import "./sobreNosotros.css";

const equipoDesarrollo = [
  {
    nombre: "Guido Simonetti",
    foto_perfil: imgGuido,
    linkedin: "https://www.linkedin.com/perfil-miembro-2",
    descripcion: "Desarrollador Full Stack.",
  },
  {
    nombre: "Marcos Farina",
    foto_perfil: imgMarcos,
    linkedin: "https://www.linkedin.com/in/farina-marcos-1063a271/",
    descripcion: "Desarrollador Full-Stack | Licenciado en Informática | Analista de Sistemas.",
  },
  {
    nombre: "Melina Gabriela Figueroa",
    foto_perfil: imgMelina,
    linkedin: "https://www.linkedin.com/in/melinagfigueroa/",
    descripcion:
      "Desarrolladora Full-Stack | Fron-End | Back-End | UX UI Designer.",
  },

  {
    nombre: "Fernando Andres Diaz",
    foto_perfil: imgFernando,
    linkedin: "https://www.linkedin.com/in/diaz-fernando/",
    descripcion: "Desarrollador Full Stack.",
  },
  {
    nombre: "Nicolas Vega",
    foto_perfil: imgNico,
    linkedin: "https://www.linkedin.com/perfil-miembro-2",
    descripcion: "Desarrollador Full Stack.",
  },
  {
    nombre: "Kevin Santander",
    foto_perfil: imgKevin,
    linkedin: "https://www.linkedin.com/perfil-miembro-1",
    descripcion: "Desarrollador Full Stack |  habilidades destacadas en la resolución de problemas | diseño de sistemas y optimización de rendimiento.",
  },
  {
    nombre: "Emanuel Lucietti",
    foto_perfil: imgEma,
    linkedin: "https://www.linkedin.com/perfil-miembro-1",
    descripcion: "Desarrollador Full Stack | Estudiante en tecnicatura superior en automatización y robótica",
  },
];

const SobreNosotros = () => {
    // Configuración de la animación de aparición
    const fadeIn = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 500 },
    });
  
    return (
      <Container className="containerSobreNosotros">
            {/* Título principal */}
            <h1 className="titulo-principal">Bienvenido a Mentes Dementes</h1>
            {/* Subtítulo */}
            <h5 className="sub-titulo">Explora nuestro Mundo Creativo</h5>
            {/* Sección de bienvenida */}
            <section className="clase-seccion">
              {/* Párrafo de bienvenida con formato */}
              <p className="clase-parrafo-bienvenida">
                <strong>
                  Somos Mentes Dementes, un equipo apasionado dedicado a la
                  innovación y al desarrollo excepcional. <br />
                  ¡Gracias por unirte a nosotros en esta emocionante travesía!
                </strong>
              </p>
              {/* Párrafo de la idea y origen del proyecto */}
              <p className="clase-parrafo-idea">
                <strong>
                  Nuestra historia comenzó con la chispa creativa de uno de
                  nuestros miembros, quien participa activamente en la
                  organización del club. Nos comentó la necesidad que hay en las
                  pequeñas instituciones, sean deportivas o de otra índole, de que
                  se puedan dar a conocer las ofertas de actividades, locaciones,
                  contactos y demás servicios relevantes, de una manera más formal
                  y estructurada. Este desafío nos llevó a crear una web que sea
                  simple y fácil de administrar, pero que cumpla con la premisa de
                  mostrar de manera concisa toda la información importante de una
                  institución.
                  <br />
                  Esta idea evolucionó hasta convertirse en un equipo apasionado y
                  comprometido con el desarrollo y la innovación.
                </strong>
              </p>
              {/* Sección de servicios ofrecidos */}
              <section className="seccion-servicios">
                {/* Párrafo de servicios con formato */}
                <p className="clase-parrafo-servicios">
                 <strong> En Mentes Dementes, nos enorgullece especializarnos en diversas
                  áreas, ofreciendo soluciones integrales y creativas para
                  cualquier desafío. <br />
                  Algunas de nuestras principales competencias incluyen:
                  </strong></p>
                {/* Lista de servicios */}
                <ul>
                  <li>
                    <strong>Desarrollo Web:</strong>
                    <br />
                    Creamos experiencias en línea cautivadoras y funcionales que
                    van más allá de las expectativas.
                  </li>
                  <li>
                    <strong>Diseño de Interfaces de Usuario:</strong>
                    <br />
                    Transformamos ideas en interfaces visuales atractivas y fáciles
                    de usar.
                  </li>
                  <li>
                    <strong>Programación Backend:</strong>
                    <br />
                    Trabajamos en la sombra para garantizar la funcionalidad y el
                    rendimiento de cada proyecto.
                  </li>
                </ul>
              </section>
            </section>
            {/* Sección final con mensaje de invitación */}
            <section>
              <p>
                En Mentes Dementes, no solo somos desarrolladores; somos
                narradores de historias digitales, arquitectos de experiencias
                únicas y apasionados por la innovación. ¡Explora nuestro mundo y
                únete a nosotros en esta emocionante travesía!
              </p>
            </section>
        {/* Sección con tarjetas de miembros del equipo */}
        <section>
          <Row className="row-integrante">
            {equipoDesarrollo.map((miembro, index) => (
              <Col key={index} className="card-integrante">
                <animated.div style={fadeIn} className="div-integrantes">
                  {/* Contenido de cada tarjeta de miembro */}
                  <h5 className="titulo-nombre">{miembro.nombre}</h5>
                  <h6 className="descripcion-skills">{miembro.descripcion}</h6>
                  <img
                    className="cardImg"
                    variant="top"
                    src={miembro.foto_perfil}
                    alt={`Foto de ${miembro.nombre}`}
                  />
                  {/* Enlace al perfil de LinkedIn del miembro */}
                  <a
                    href={miembro.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    LinkedIn
                  </a>
                </animated.div>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    );
  };
  
  export default SobreNosotros;

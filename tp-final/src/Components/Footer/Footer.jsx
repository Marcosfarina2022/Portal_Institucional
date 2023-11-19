import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import logoCLA from "../../Imagenes/imagenes-Header-Footer/logoCla.svg";
import "./footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      {/* Encabezado */}
      <footer className="container-footer">
        <section className="logo-section">
          <Link to="/">
            <img src={logoCLA} alt="logo-Las-Aguilas" />
          </Link>
        </section>
        <section className="title-section">
          <h5>El club familiar de Rugby y Hockey más austral del mundo</h5>
          {/* Información de Derechos de Autor */}
          <Link to="/sobreNosotros">
            <p>&copy; 2023 - MentesDeMentes </p>
          </Link>
        </section>
        {/* Redes Sociales */}
        <section className="redes-section">
          <h6>Nuestro club en redes</h6>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/clublasaguilas/"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/clublasaguilasushuaia/?locale=es_LA"
            title="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/@clublasaguilas-analisisdev8566"
            title="Youtube"
          >
            <FaYoutube  />
          </a>
        </section>
      </footer>
    </React.Fragment>
  );
};

export default Footer;

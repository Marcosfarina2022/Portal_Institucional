import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";
import logoCLA from "../../Imagenes/LogoCLA2.png";
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="container-header">
        <section className="logo-section">
          <Link to="/">
            <img src={logoCLA} alt="logo-Las-Aguilas" />
          </Link>
        </section>
        <section className="title-section">
          <h1>Club Las Aguilas</h1>
          <NavBar />
        </section>
        <section className="ingreso-registro-section">
          <LinkContainer to="/ingresar">
            <a href="/ingresar">
              <FaSignInAlt /> Ingresar
            </a>
          </LinkContainer>
          <LinkContainer to="/registro">
            <a href="/registro">
              <FaUserPlus /> Registrarse
            </a>
          </LinkContainer>
        </section>

      </header>
    </>
  );
};

export default Header;

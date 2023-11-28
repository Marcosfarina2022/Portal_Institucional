import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";
import Logo from "../../Imagenes/imagenes-Header-Footer/logo.svg";
import "./header.css";

const Header = () => {
  return (
    <React.Fragment>
    <>
      <header>
        <section className="container-header">
        <section className="logo-section">
          <Link to="/">
            <img src={Logo} alt="logo-Las-Aguilas" />
          </Link>
        </section>
        <section className="title-section">
          <h1>Club Las Aguilas</h1>
          <NavBar className='nav-bar' />
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
        </section>
      </header>
    </>
    </React.Fragment>
 );
};

export default Header;
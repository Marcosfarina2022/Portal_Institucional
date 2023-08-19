import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-nav">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse expand="lg" id="basic-navbar-nav">
          <Nav className="justify-content-around w-100">
            <LinkContainer to="/">
              <Nav.Link href="#inicio" className="color">
                Inicio
              </Nav.Link>
            </LinkContainer>
            <NavDropdown title="Noticias" id="basic-nav-dropdown" className="color">
              <LinkContainer to="/noticias/rugby-juveniles">
                <NavDropdown.Item>Rugby-Adultos</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/noticias/rugby-adultos">
                <NavDropdown.Item>Rugby- Juveniles</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/noticias/hockey-juveniles">
                <NavDropdown.Item>Hockey-Adultos</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/noticias/hockey-adultos">
                <NavDropdown.Item>Hockey- Juveniles</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/galeria">
              <Nav.Link href="#galeria" className="color rounded">
                Galeria
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/institucion">
              <Nav.Link href="#institucion" className="color rounded">
                Institución
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contacto">
              <Nav.Link href="#contacto" className="color rounded">
                Contacto
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

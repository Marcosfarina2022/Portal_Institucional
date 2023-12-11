import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
import Noticias from '../Noticias/Noticias';
import './NavBar.css'

import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-nav">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse expand="lg" id="basic-navbar-nav">
          <Nav className="justify-content-around w-100">
          <LinkContainer to="/">
              <Nav.Link href="#inicio" className='color'>Inicio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/noticias">
            <NavDropdown title="Noticias" id="basic-nav-dropdown" className='color'>
              <Nav.Link href="#noticias/rugby-juveniles" className='color'>Rugby-Juveniles</Nav.Link>
              <NavDropdown.Divider />
              <Nav.Link href="#rugby-adultos" className='color'>Rugby- Adultos</Nav.Link>
              <NavDropdown.Divider />
              <Nav.Link href="#hockey-juveniles" className='color'>Hockey-Juveniles</Nav.Link>
              <NavDropdown.Divider />
              <Nav.Link href="#hockey-adultos" className='color'>Hockey-Adultos</Nav.Link>
            </NavDropdown>
            </LinkContainer>
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

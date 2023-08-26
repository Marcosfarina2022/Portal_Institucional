import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
import './NavBar.css'


const NavBar = () => {

  return (
    <Navbar expand="lg" className='bg-nav'>
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse expand="lg" id="basic-navbar-nav">
          <Nav className="justify-content-around w-100">

          <LinkContainer to="/">
              <Nav.Link href="#inicio" className='color'>Inicio</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Noticias" id="basic-nav-dropdown" className='color'>
            <LinkContainer to="/rugby-juveniles">
              <NavDropdown.Item href="rugby-juveniles" className='color'>Rugby-Juveniles</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <NavDropdown.Item href="rugby-adultos" className='color'>Rugby- Adultos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="hockey-juveniles" className='color'>Hockey-Juveniles</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="hockey-adultos" className='color'>Hockey-Adultos</NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/galeria">
              <Nav.Link href="#galeria" className='color rounded'>Galeria</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/institucion">
              <Nav.Link href="#institucion" className='color rounded'>Institución</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contacto">
              <Nav.Link href="#contacto" className='color rounded'>Contacto</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;

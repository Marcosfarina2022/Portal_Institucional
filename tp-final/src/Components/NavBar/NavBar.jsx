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
            <NavDropdown title="Disciplinas" id="basic-nav-dropdown" className='color'>
              <NavDropdown.Item href="#action/3.1" className='color'>Rugby</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2" className='color'>
                Hockey</NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/noticias">
              <Nav.Link href="#noticia" className='color rounded'>Noticias</Nav.Link>
            </LinkContainer>
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

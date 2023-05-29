import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'


const NavBar = () => {
    return(<>
    <Navbar expand="lg" variant="dark" className='bg-nav'>
      <Container fluid>
        {/*<Navbar.Brand href="#home" className='color'>Home</Navbar.Brand>*/}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-around w-100">
          <Nav.Link href="#home" className='color'>Home</Nav.Link>
            <Nav.Link href="#noticia" className='color'>Noticias</Nav.Link>
            <Nav.Link href="#galeria" className='color'>Galeria</Nav.Link>
            <Nav.Link href="#institucion"className='color'>Institución</Nav.Link>
            <Nav.Link href="#contacto" className='color'>Contacto</Nav.Link>
            <Nav.Link href= "#buscar" className='color'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown"className='color'>
              <NavDropdown.Item href="#action/3.1" className='color'>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"  className='color'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='color'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className='color'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#registro" className='color'>Registrarse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>)
}

export default NavBar
import NavBar from '../NavBar/NavBar';
import './Header.css'; 
import  logoCLA  from "../../Imagenes/LogoCLA2.png";
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import React, { useState } from 'react';




const Header = () => {
const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

return(<>
    <header className='header'>
        <div className='logo-titulo'>
            <div className='div-logo'>
                <Link to="/">
                    <img className='logo' href={"/"} src={logoCLA} alt="Logo"/>  
                </Link>        
            </div>
            <div>        
            <h1>Club Las Aguilas</h1>    
            </div>
        </div>
        
        <NavBar categoriaSeleccionada={setCategoriaSeleccionada}/>
        
        <div className='divRegistro'>
            <LinkContainer to="auth/ingreso">
              <a href="Ingresá" className='creaCuenta colorEnlace'>Ingresar</a>
            </LinkContainer>
            <LinkContainer to="auth/registro">
              <a href="#registro" className='colorEnlace'>Registrarse</a>
            </LinkContainer>
        </div>
          
    </header>
    <div className="glow"></div>
</>)
}

export default Header


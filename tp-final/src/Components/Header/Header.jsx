import NavBar from "../NavBar/NavBar";
import logoCLA from "../../Imagenes/LogoCLA2.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./header.css";

const Encabezado = ({ loggedIn, handleLogout }) => {
    const navigate = useNavigate();
    const handleLogoutAndNavigate = () => {
        handleLogout();
        navigate("/");
        console.log(loggedIn)
      };
    
      return (
    <>
      <header className="header">
        <div className="logo-titulo">
          <div className="div-logo">
            <Link to="/">
              <img className="logo" src={logoCLA} alt="Logo" />
            </Link>
          </div>
          <div>
            <h1>Club Las Aguilas</h1>
          </div>
        </div>
        
        <NavBar/>
        
        <div className='divRegistro'>
            <LinkContainer to="/ingresar">
              <a href="Ingresá" className='creaCuenta colorEnlace'>Ingresar</a>
            </LinkContainer> <p> ||
            </p>
            <LinkContainer to="/registro">
              <a href="#registro" className='colorEnlace'>Registrarse</a>
            </LinkContainer>
        </div>
      </header>
    </>
  );
};

export default Encabezado;
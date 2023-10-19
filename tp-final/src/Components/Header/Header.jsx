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

        <NavBar categoriaSeleccionada={null} />
        <div className={`divRegistro ${loggedIn ? "ingreso-registro" : ""}`}>
          {loggedIn ? (
            <>
              <button
                onClick={handleLogoutAndNavigate}
                className="creaCuenta colorEnlace"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/auth/ingreso" className="creaCuenta colorEnlace">
                Ingresar
              </Link>
              <Link to="/auth/registro" className="colorEnlace">
                Registrarse
              </Link>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Encabezado;
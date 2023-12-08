import NavBar from "../NavBar/NavBar";
import "./Header.css";
import logoCLA from "../../Imagenes/LogoCLA2.png";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo-titulo">
          <div className="div-logo">
            <Link to="/">
              <img className="logo" href={"/"} src={logoCLA} alt="Logo" />
            </Link>
          </div>
          <div>
            <h1>Club Las Aguilas</h1>
          </div>
        </div>

        <NavBar />

        <div className="divRegistro">
          <LinkContainer to="/ingresar">
            <a href="Ingresá" className="">
              <FaSignInAlt /> Ingresar
            </a>
          </LinkContainer>
          <LinkContainer to="/registro">
            <a href="#registro" className="">
              {" "}
              <FaUserPlus />
              Registrarse
            </a>
          </LinkContainer>
        </div>
      </header>
      <div className="glow"></div>
    </>
  );
};

export default Header;

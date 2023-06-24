import NavBar from '../NavBar/NavBar';
import './Header.css'; 
import  logoCLA  from "../../Imgenes/LogoCLA2.png";
import { Link } from 'react-router-dom';




const Header = () => {
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
        
        <NavBar/>
        
        <div className='divRegistro'>
            <a href="Ingresá" className='creaCuenta colorEnlace'>Ingresar</a>
            <a href="Crea tu cuenta" className='colorEnlace'>Registrarse</a>
        </div>
          
    </header>
    <div className="glow"></div>
</>)
}

export default Header


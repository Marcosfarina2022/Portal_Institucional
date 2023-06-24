import NavBar from '../NavBar/NavBar';
import './Header.css'; 
import  logoCLA  from "../../Imgenes/LogoCLA2.png";
import { Link } from 'react-router-dom';




const Header = () => {
return(<>
    <div>
        <div className='divRegistro'>
        <a href="Crea tu cuenta" className='colorEnlace'>Creá tu cuenta</a>
        <a href="Ingresá" className='creaCuenta colorEnlace'>Ingresá</a>
        </div>
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
        
    </header>
    </div>
</>)
}

export default Header


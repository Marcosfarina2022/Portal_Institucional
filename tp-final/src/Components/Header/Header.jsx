import NavBar from '../NavBar/NavBar';
import './Header.css'; 
import  logoCLA  from "../../Imgenes/LogoCLA2.png";
import { Link } from 'react-router-dom';




const Header = () => {
return(<>
    <header className='header'> 
        <div className='logo-titulo'> {/*Este loco no es el que va a quedar*/}
            <div className='div-logo'>
                <Link to="/">
                    <img className='logo' href={"/"} src={logoCLA} alt="Logo"/>  
                </Link>        
            </div>
            <div className='titulo'>        
            <h1>Club Las Aguilas</h1>    
            </div>
        </div>
        
            <NavBar/>
        
    </header>
</>)
}

export default Header


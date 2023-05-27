import NavBar from '../NavBar/NavBar';
import './Header.css'; 
import  logoCLA  from "../../Imgenes/LogoCLA.png";

const Header = () => {
return(<>
    <div className='header'> 
        <div className='logo-titulo'> {/*Este loco no es el que va a quedar*/}
            <div className='div-logo'>
                <img className='logo' src={logoCLA} alt="Logo" />           
            </div>
            <div className='titulo'>        
            <h1>Club Las Aguilas</h1>    
            </div>
        </div>
        <NavBar/>
    </div>
</>)
}

export default Header


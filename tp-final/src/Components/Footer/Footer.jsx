import './Footer.css'
import  logoCLA  from "../../Imgenes/LogoCLA2.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">

            <div className="div-footer">

                <div className='div-logo-footer'>
                <Link to="/">
                    <img className='logo' href={"/"} src={logoCLA} alt="Logo"/>  
                </Link>   
                </div>

                <div className='div-contacto'>
                    <div>Club familiar de Rugby y Hockey más austral del mundo.</div>
                    <Link to="/contacto">Contáctanos</Link> 
                </div>

                <div className='div-redes'>
                    <div>Nuestro club en redes</div>

                    <div className="div-icons">
                        <div><a target="_blank" rel="noreferrer" href="https://www.instagram.com/clublasaguilas/" title="Instagram">
                            <FaInstagram color='black' /></a></div>
                        <div><a target="_blank" rel="noreferrer" href="https://www.facebook.com/clublasaguilasushuaia/?locale=es_LA" title="Facebook">
                            <FaFacebook color='black' /></a></div>
                        <div><a target="_blank" rel="noreferrer" href="https://www.youtube.com/@clublasaguilas-analisisdev8566" title="Youtube">
                            <FaYoutube color='black'/></a></div>
                    </div>
                </div>
            </div>
            <div className="div-copyright">
                <p>&copy; 2023 - MentesDeMentes</p>
            </div>
        </footer>
    );
}

export default Footer
import './Footer.css'
import logoClaBlanco from "../../Imgenes/logoClaBlanco.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">

            <div className="flex-container">

                <div className='div-logo'>
                    <img className='logo' src={logoClaBlanco} alt="Logo" />
                </div>

                <div className='div-contacto'>
                    <div>Club familiar de Rugby y Hockey más austral del mundo.</div>

                    <div className="footer-email">Contáctanos: <a href="mailto:clasaguilas@gmail.com">clasaguilas@gmail.com</a></div>
                </div>

                <div className='div-redes'>
                    <div>SEGUINOS</div>

                    <div className="div-icons">
                        <div><a target="_blank" rel="noreferrer" href="https://www.facebook.com/clublasaguilasushuaia/?locale=es_LA" title="Facebook">
                            <FaFacebook /></a></div>
                        <div><a target="_blank" rel="noreferrer" href="https://www.instagram.com/clublasaguilas/" title="Instagram">
                            <FaInstagram /></a></div>
                        <div><a target="_blank" rel="noreferrer" href="https://www.youtube.com/@clublasaguilas-analisisdev8566" title="Youtube">
                            <FaYoutube /></a></div>
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
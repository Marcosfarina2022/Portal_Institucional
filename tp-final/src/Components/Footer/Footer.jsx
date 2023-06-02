import './Footer.css'
import logoCLA from "../../Imgenes/LogoCLA2.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">

            <div class="flex-container">

                <div class='div-logo'>
                    <img className='logo' src={logoCLA} alt="Logo" />
                </div>

                <div class='div-contacto'>
                    <div>Club familiar de Rugby y Hockey más austral del mundo.</div>

                    <div class="footer-email">Contáctanos: <a href="mailto:clasaguilas@gmail.com">clasaguilas@gmail.com</a></div>
                </div>

                <div class='div-redes'>
                    <div>SEGUINOS</div>

                    <div class="div-icons">
                        <div><a target="_blank" href="https://www.facebook.com/clublasaguilasushuaia/?locale=es_LA" title="Facebook">
                            <FaFacebook /></a></div>
                        <div>                        <a target="_blank" href="https://www.instagram.com/clublasaguilas/" title="Instagram">
                            <FaInstagram /></a></div>
                        <div>
                            <a target="_blank" href="https://www.youtube.com/@clublasaguilas-analisisdev8566" title="Youtube">
                                <FaYoutube /></a></div>


                    </div>
                </div>
            </div>

            <p>&copy; 2023 - MentesDeMentes</p>
        </footer>
    );
}

export default Footer
import './Footer.css'
import logoCLA from "../../Imgenes/LogoCLA2.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div class="td-footer-wrapper td-container-wrap ">

                <div class="td-footer-bottom-full">
                    <div class="td-container">
                        <div class="td-pb-row">
                            <div className='div-logo'>
                                <img className='logo' src={logoCLA} alt="Logo" />
                            </div>
                            <div class="td-pb-span5"><aside class="footer-text-wrap"><div class="block-title"></div>Club familiar de Rugby y Hockey más austral del mundo.<div class="footer-email-wrap">Contáctanos: <a href="mailto:clasaguilas@gmail.com">clasaguilas@gmail.com</a></div></aside></div>
                            <div class="td-pb-span4">
                                <aside class="footer-social-wrap td-social-style-2">
                                    <div class="block-title"><span>SEGUINOS</span></div>
                                    <span class="td-social-icon-wrap">
                                        <a target="_blank" href="https://www.facebook.com/clublasaguilasushuaia/?locale=es_LA" title="Facebook">
                                            <FaFacebook />
                                        </a>
                                    </span>
                                    <span class="td-social-icon-wrap">
                                        <a target="_blank" href="https://www.instagram.com/clublasaguilas/" title="Instagram">
                                            <FaInstagram />
                                        </a>
                                    </span>
                                    <span class="td-social-icon-wrap">
                                        <a target="_blank" href="https://www.youtube.com/@clublasaguilas-analisisdev8566" title="Youtube">
                                            <FaYoutube />
                                        </a>
                                    </span></aside></div>
                        </div>
                    </div>
                </div>
            </div>
            <p>&copy; 2023 - MentesDeMentes</p>
        </footer>
    );
}

export default Footer
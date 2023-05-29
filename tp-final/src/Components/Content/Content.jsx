import imgNoti from '../../Imgenes/noticia1.jpg'
import Carousel from "../Carousel/Carousel";
import './Content.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Content = () =>{
return(<>
    <div className="content">
        <div className="div-carousel">
            <Carousel/> 
        </div>
            <div className='seccionNoticias'>
                <h2 className='tituloNoticia'>Últimas Noticias</h2>
            </div>
                <div className="noticia1">
                    <div className="noticias">
                        <div className="imgNoticia">
                            <img className="imgNoti" src={imgNoti} alt="rugbierCLA" />
                        </div>
                
                        <div className="resumenNoticia bloque1">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugiat consectetur veritatis aliquam. Eos, quo ea, excepturi provident, aliquid quos sint vel quibusdam dicta consequuntur dolores impedit similique tempora? Autem?

                            </p>
                        </div>
                    </div>
                    <div className="noticias noticia2">
                        <div className="imgNoticia">
                            <img className="imgNoti" src={imgNoti} alt="rugbierCLA" />
                        </div>
                
                        <div className="resumenNoticia">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugiat consectetur veritatis aliquam. Eos, quo ea, excepturi provident, aliquid quos sint vel quibusdam dicta consequuntur dolores impedit similique tempora? Autem?

                            </p>
                        </div>
                    </div>
                    <div className="noticias noticia2">
                        <div className="imgNoticia">
                            <img className="imgNoti" src={imgNoti} alt="rugbierCLA" />
                        </div>
                
                        <div className="resumenNoticia">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugiat consectetur veritatis aliquam. Eos, quo ea, excepturi provident, aliquid quos sint vel quibusdam dicta consequuntur dolores impedit similique tempora? Autem?

                            </p>
                        </div>
                    </div>
                    <div className="noticias noticia2">
                        <div className="imgNoticia">
                            <img className="imgNoti" src={imgNoti} alt="rugbierCLA" />
                        </div>
                
                        <div className="resumenNoticia">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugiat consectetur veritatis aliquam. Eos, quo ea, excepturi provident, aliquid quos sint vel quibusdam dicta consequuntur dolores impedit similique tempora? Autem?

                            </p>
                        </div>
                    </div>
                    
                </div>                
    </div>
</>)
} 


export default Content
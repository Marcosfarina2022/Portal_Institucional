import imgNoti from '../../Imgenes/noticia1.jpg'
import Carrusel from "../Carousel/Carousel";
import './Content.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Content = () =>{
return(<>
    <div className="content">
        <div className="carousel">
            <Carrusel/>
        
        </div>
        <div className="resumenNoticias">
        <div className="noticias">
            <div className="imgNoticia">
                <img className="imgNoti" src={imgNoti} alt="rugbierCLA" />
            </div>
            <div className="resumenNoticia">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugiat consectetur veritatis aliquam. Eos, quo ea, excepturi provident, aliquid quos sint vel quibusdam dicta consequuntur dolores impedit similique tempora? Autem?

                </p>
            </div>
        </div>
        <div className="noticias">
            <div className="imgNoticia">
                <img className="imgNoti" src={imgNoti} alt="rugbierCLA" />
            </div>
            <div className="resumenNoticia">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugiat consectetur veritatis aliquam. Eos, quo ea, excepturi provident, aliquid quos sint vel quibusdam dicta consequuntur dolores impedit similique tempora? Autem?

                </p>
            </div>
        </div>
        <div className="noticias">
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
import { Container, Row, Col, Card } from 'react-bootstrap';
//import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import './noticias.css';
import { useSpring, animated } from 'react-spring';
import { IoIosAddCircleOutline } from "react-icons/io";
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Noticias = (props) => {
  const [filtro,setFiltro]= useState('');
  const [modelNoticia, setModel] = useState(false);
  const [noticias, setNoticias] = useState([]);
  const noticiasFiltradas = noticias.filter(element => element.categoriaId === filtro)

const openModel = () => {
  setModel(true);
};

const [image, setImage] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [infoNoticia, setInfoNoticia] = useState('');
  const [categoriaNoticia, setCategoriaNoticia] = useState(0);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleTituloChange = (e) => {
    setTitulo(e.target.value);
  };
  
  const handleInfoChange = (e) => {
    setInfoNoticia(e.target.value);
  };

  const handleCategoriaChange = (e) => {
    const categoriaSeleccionada = e.target.value;
    setCategoriaNoticia(parseInt(categoriaSeleccionada));

    // Puedes realizar otras acciones basadas en la categoría seleccionada aquí, si es necesario
    console.log(`Categoría seleccionada: ${categoriaSeleccionada}`);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  
  
   // Crea un objeto FormData para enviar la imagen y otros datos al servidor
   const key = 'c8c772fbdeeef65807e6f575c1e3b288'
   const formData = new FormData();
   formData.append('key', key);
   formData.append('image', image);
   formData.append('name', titulo);


   try {
     // Realiza la solicitud POST al servidor utilizando axios
     const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
       headers: {
         'Content-Type': 'multipart/form-data', // Especifica el tipo de contenido como 'multipart/form-data' para el envío de archivos
       },
     });
     console.log('se cargo imagen a imgbb');
     //Esta constante guarda la url de la imagen cargada
    const urlImg = response.data.data.url
    const nuevaNoticia = {
      titulo_noticia: titulo,
      descripcion_noticia: infoNoticia,
      foto_noticia: urlImg,
      categoriaId: categoriaNoticia
 };
// se realiza un POST a nuesta base de datos
 await fetch('http://localhost:4000/noticias/crear', {
     method: 'POST',
     headers: {
         'Content-Type': 'application/json',
     },
     body: JSON.stringify(nuevaNoticia),
 })
     
    console.log('se guardo en la base de datos', response);
   } catch (error) {
     // Maneja los errores de la solicitud
     console.error('Error al enviar la imagen:', error);
   }
};

  useEffect(()=>{
    setFiltro(parseInt(props.categoria))
    const obtenerNoticias = async () => {
      try {
        const response = await axios.get('http://localhost:4000/noticias/todos');
        setNoticias(response.data);
      } catch (error) {
        console.error('Error al obtener noticias:', error);
      }
    };

    obtenerNoticias();
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 }, // Ajusta la duración de la animación
  });

  return (
    <Container className='containerNoticias text-center fluid'>
      <div className={modelNoticia ? 'modelNoticia open' : 'modelNoticia'}>
      <form className='formNoticia' onSubmit={handleSubmit}>
      <div>
        <label className='labelNoticia' htmlFor="titulo">Titulo:</label>
        <input
          className='inputNotica'
          type="text"
          id="titulo"
          value={titulo}
          onChange={handleTituloChange}
        />
      </div>
      <div>
        <label className='labelNoticia' htmlFor="image">Cargar Archivo:</label>
        <input
          className='inputNotica'
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <div>
        <label className='labelNoticia' htmlFor="infoNoticia">Informacion de noticia:</label>
        <textarea className='textareaNoticia'
          type="text"
          id="infoNoticia"
          value={infoNoticia}
          onChange={handleInfoChange}
        />
      </div>
      <div>
        <label className='labelNoticia' htmlFor="categoriaNoticia">Categoria de noticia:</label>
        <select name="seleccionCategoria" className="seleccionCategoria" value={categoriaNoticia} onChange={handleCategoriaChange}>
      <option value={0}>Selecciona la categoria</option>
      <option value={1}>1- Rugby Juvenil</option>
      <option value={2}>2- Rugby Adultos</option>
      <option value={3}>3- Hockey Juvenil</option>
      <option value={4}>4- Hockey Adultos</option>
    </select>
      </div>
      <div>
        <button className='btnCargarNoticia' type="submit">Enviar</button>
      </div>
    </form>
                <CloseIcon className='closeIconNoticia' onClick={() => setModel(false)} />
            </div>
      <Row>
        <h1>Ultimas noticias</h1>
      </Row>
      <Row className='rowNoticias'>
        {noticiasFiltradas.map((noticias, index) => (
          <Col key={index} xs={12} md={4} className='mt-4 mb-4'> 
            <Card className='cardNoticias'>
              <Card.Body className='cardBodyNoticias'>
                <animated.div style={fadeIn}>
                  <Card.Title className='cardTitleNoticias'>{noticias.titulo_noticia}</Card.Title>
                  <Card.Subtitle className='cardSubtitleNoticias'>
                    <p className='text-center'>{noticias.descripcion_noticia}</p>
                  </Card.Subtitle>
                  <Link  to={noticias.linkNoticia}target='_blank'rel='noopener noreferrer'className='cardLink'>
                  <Card.Img className='cardImgNoticias' variant='top' src={noticias.foto_noticia} />
                  </Link>
                </animated.div>
              </Card.Body>
            </Card>
          </Col>
          ))}
      </Row><div>
      <IoIosAddCircleOutline className='btn-agregarNoticia' onClick={() => openModel()}
      ></IoIosAddCircleOutline>
      </div>
    </Container>
  );
};

export default Noticias;

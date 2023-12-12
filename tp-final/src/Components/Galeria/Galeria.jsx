import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './galeria.css';
import CajaDeComentarios from '../CajaDeComentarios/CajaDeComentarios';


const Galeria = () => {
    const [fotos, setFotos] = useState([]);
    const [model, setModel] = useState(false);
    const [modelCargarFoto, setModelCargarFoto] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
  
    useEffect(() => {
      const fetchImagenes = async () => {
        try {
          const response = await fetch('http://localhost:4000/galeria/fotos');
          const data = await response.json();
          setFotos(data); // Asegúrate de que el formato de tu respuesta coincida con la estructura de tus fotos
        } catch (error) {
          console.error('Error al obtener las imágenes:', error.message);
        }
      };
  
      fetchImagenes();
    }, []);

  const getImg = (imgSrc) => {
      setTempImgSrc(imgSrc);
      setModel(true);
  };
  
  return (
    <>
       <div className={model ? 'model open' : 'model'}>
                <img src={tempImgSrc} />
                <CajaDeComentarios/>
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <div className={modelCargarFoto ? 'modelCargarFoto open' : 'modelCargarFoto'}>
                <img src={tempImgSrc} />
                <CajaDeComentarios/>
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <h2>Galería</h2>
            <div className='galeria'>
            {fotos.map((item) => (
          <div className='pics' key={item.id} onClick={() => getImg(item.url)}>
            <img className='images' src={item.url} alt={item.img_nombre} style={{ width: '100%' }} />
          </div>
                ))}
            </div>
        </>


    );

};

export default Galeria;
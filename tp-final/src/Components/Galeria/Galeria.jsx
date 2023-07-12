
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import hockeyFem1 from '../../Imagenes/imagenesGaleria/hockeyClub.jpeg';
import hockeyFem2 from '../../Imagenes/imagenesGaleria/hockeyClub2.jpeg';
import hockeyFem3 from '../../Imagenes/imagenesGaleria/hockeyClub3.jpeg';
import rugbyFem1 from '../../Imagenes/imagenesGaleria/infantiles.jpeg';
import imgInfantil1 from '../../Imagenes/imagenesGaleria/infantiles2.jpeg';
import imgInfantil2 from '../../Imagenes/imagenesGaleria/infantil5.jpeg';
import imgInfantil3 from '../../Imagenes/imagenesGaleria/infantiles3.jpeg';
import imgInfantil4 from '../../Imagenes/imagenesGaleria/infantiles4.jpeg';
import imgInfantil5 from '../../Imagenes/imagenesGaleria/rugbyClub.jpeg';
import './galeria.css';

const Galeria = () => {
  const fotos = [
    { id: 1, imgSrc: imgInfantil1 },
    { id: 2, imgSrc: hockeyFem2 },
    { id: 3, imgSrc: rugbyFem1 },
    { id: 4, imgSrc: imgInfantil3 },
    { id: 5, imgSrc: hockeyFem3 },
    { id: 6, imgSrc: imgInfantil4 },
    { id: 7, imgSrc: hockeyFem1 },
    { id: 8, imgSrc: imgInfantil2 },
    { id: 9, imgSrc: imgInfantil5 },
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState(' ');

  const getImg = (imgSrc) => {
      setTempImgSrc(imgSrc);
      setModel(true);
  };
  const closeModal = () => {
    setModel(false);
  };
  return (
    <>
       <div className={model ? 'model open' : 'model'}>
                <img src={tempImgSrc} />
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <h2>Galería</h2>
            <div className='galeria'>
                {fotos.map((item, index) => {
                    return (
                        <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                            <img className='images' src={item.imgSrc} style={{ width: '100%' }} />
                        </div>
                    );
                })}
            </div>
        </>


    );

};

export default Galeria;
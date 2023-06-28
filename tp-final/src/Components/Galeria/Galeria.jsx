import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './galeria.css';

import hockeyFem1 from '../../Imgenes/imagenesGaleria/hockeyClub.jpeg';
import hockeyFem2 from '../../Imgenes/imagenesGaleria/hockeyClub2.jpeg';
import hockeyFem3 from '../../Imgenes/imagenesGaleria/hockeyClub3.jpeg';
import rugbyFem1 from '../../Imgenes/imagenesGaleria/infantiles.jpeg';
import imgInfantil1 from '../../Imgenes/imagenesGaleria/infantiles2.jpeg';
import imgInfantil2 from '../../Imgenes/imagenesGaleria/infantil5.jpeg';
import imgInfantil3 from '../../Imgenes/imagenesGaleria/infantiles3.jpeg';
import imgInfantil4 from '../../Imgenes/imagenesGaleria/infantiles4.jpeg';
import imgInfantil5 from '../../Imgenes/imagenesGaleria/rugbyClub.jpeg';

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
  const [tempImgSrc, setTempImgSrc] = useState('');

  const openModal = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const closeModal = () => {
    setModel(false);
  };

  return (
    <>
      {model && (
        <div className='model'>
          <img src={tempImgSrc} alt='imagen' />
          <CloseIcon onClick={closeModal} />
        </div>
      )}
      <h2>Galería</h2>
      <div className='galeria'>
        {fotos.map((item) => (
          <div className='pics' key={item.id} onClick={() => openModal(item.imgSrc)}>
            <img className='images' src={item.imgSrc} alt='imagen' style={{ width: '100%' }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Galeria;
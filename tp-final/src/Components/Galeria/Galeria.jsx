import React from 'react';
import { motion } from 'framer-motion';
import hockeyFem1 from '../../Imgenes/imagenesGaleria/imagenGaleria1.svg';
import hockeyFem2 from '../../Imgenes/imagenesGaleria/imagenGaleria2.svg';
import hockeyFem3 from '../../Imgenes/imagenesGaleria/imagenGaleria3.svg';
import rugbyMas1 from '../../Imgenes/imagenesGaleria/imagenGaleria4.svg';
import rugbyFem1 from '../../Imgenes/imagenesGaleria/imagenGaleria5.svg';
import infan1 from '../../Imgenes/imagenesGaleria/imagenGaleria6.svg';
import './galeria.css';

const imagesInfantiles = [
    { id: 4, src: infan1, alt: 'Imagen 4' },
];

const imagesFemenino = [
    { id: 1, src: hockeyFem1, alt: 'Imagen 1' },
    { id: 2, src: hockeyFem2, alt: 'Imagen 2' },
    { id: 3, src: hockeyFem3, alt: 'Imagen 3' },
    { id: 4, src: rugbyFem1, alt: 'Imagen 4' },
];

const imagesMasculino = [
    { id: 6, src: rugbyMas1, alt: 'Imagen 6' },
];

const Galeria = () => {
    return (
        <div className="slider-container">
            <h2>Te damos la bienvenida a nuestra galería</h2>
            <div className="slider">
                {imagesFemenino.map((image) => (
                    <motion.div className="item" key={image.id} whileHover={{ scale: 1.1 }}>
                        <img src={image.src} alt={image.alt} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Galeria;

import React from 'react';
import { Link } from 'react-router-dom';
import logoMacro from '../../Imgenes/imagenesSponsors/logoBancoMacro.svg';
import logoTanteSara from '../../Imgenes/imagenesSponsors/logoTanteSara.svg';
import logoPopper from '../../Imgenes/imagenesSponsors/logoPopperSports.svg';
import logoCerveza from '../../Imgenes/imagenesSponsors/logoCervezaImperial.svg';
import './sponsors.css';

const sponsorsData = [
  {
    id: 1,
    name: 'Banco Macro',
    image: logoMacro,
    alt: 'Banco Macro',
    link: 'https://www.macro.com.ar/',
    description: 'Un banco comprometido con el desarrollo y crecimiento económico.',
  },
  {
    id: 2,
    name: 'Tante Sara',
    image: logoTanteSara,
    alt: 'Tante Sara',
    link: 'https://tantesaraonline.com/',
    description: 'Un restaurante familiar con deliciosos platos caseros.',
  },
  {
    id: 3,
    name: 'Popper Sports',
    image: logoPopper,
    alt: 'Popper Sports',
    link: 'https://paseodelfuego.com.ar/',
    description: 'Una tienda especializada en artículos deportivos de calidad.',
  },
  {
    id: 4,
    name: 'Cerveza Imperial',
    image: logoCerveza,
    alt: 'Cerveza Imperial',
    link: 'https://cervezaimperial.com.ar/',
    description: 'Una cervecería artesanal que ofrece variedades únicas.',
  }
];

function Sponsors() {
  return (
    <div className="sponsors-container">
      <div className='tituloSponsors'>Agradecemos a quienes nos acompañan a diario</div>
      <div className="sponsors-grid">
        {sponsorsData.map((sponsor) => (
          <Link
            key={sponsor.id}
            to={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsors-item"
          >
            <img
              src={sponsor.image}
              alt={sponsor.alt}
              className="sponsors-image"
            />
            <div className="sponsors-description">{sponsor.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;

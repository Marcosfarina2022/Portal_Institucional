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
      <div className="text">
        <div className="text-overlay" />
        <div id="title">
          Nos apoyan
        </div>
        <div className="descripcion">
          Agradecemos de corazón a todos aquellos que nos acompañan día a día en nuestra trayectoria.
          Su apoyo y compromiso son fundamentales para nuestro éxito. Nos sentimos honrados y agradecidos
          por su confianza y lealtad. Sin su presencia, nada de esto sería posible.
          Gracias por formar parte de nuestra comunidad y por ser parte de nuestro crecimiento y desarrollo.
          Juntos, seguiremos construyendo un camino lleno de éxitos y logros. ¡Gracias por estar siempre a nuestro lado!
        </div>
      </div>

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
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
import './sponsors.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logoMacro from '../../Imgenes/imagenesSponsors/logoBancoMacro.svg';
import logoTanteSara from '../../Imgenes/imagenesSponsors/logoTanteSara.svg';
import logoPopper from '../../Imgenes/imagenesSponsors/logoPopperSports.svg';
import logoCerveza from '../../Imgenes/imagenesSponsors/logoCervezaImperial.svg';

const sponsorsData = [
    {
      id: 1,
      name: 'Banco Macro',
      image: logoMacro,
      alt: ' Banco Macro',
      link: 'https://www.macro.com.ar/',
    },
    {
      id: 2,
      name: 'Tante Sara',
      image: logoTanteSara,
      alt: 'Tante Sara',
      link: 'https://tantesaraonline.com/',
    },
    {
      id: 3,
      name: 'Popper Sports',
      image: logoPopper,
      alt: ' Popper Sports',
      link: 'https://paseodelfuego.com.ar/',
    },
    {
      id: 3,
      name: 'Cerveza Imperial',
      image: logoCerveza,
      alt: ' Cerveza Quilmes',
      link: 'https://cervezaimperial.com.ar/',
    }
  ];
  
  function Sponsors() {
    return (
      <div className="sponsors-container">
        <h2 className='tituloPat'>Nuestros Patrocinadores</h2>
        <div className="sponsors-grid">
          {sponsorsData.map((sponsor) => (
            <Link 
                key={sponsor.id} 
                to={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                >
              <img
                className="sponsor-thumbnail"
                src={sponsor.image}
                alt={sponsor.patrocinadores}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }
  
  export default Sponsors;
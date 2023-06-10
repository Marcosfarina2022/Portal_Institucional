import './sponsors.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logoMacro from '../../Imgenes/imagenesSponsors/logoBancoMacro.svg';
import logoTanteSara from '../../Imgenes/imagenesSponsors/logoTanteSara.svg';
import logoPopper from '../../Imgenes/imagenesSponsors/logoPopperSports.svg';
import logoCerveza from '../../Imgenes/imagenesSponsors/logoCervezaImperial.svg';


/*const Sponsors = () =>{

    return(
        <div>
            Acá van los sponsors
        </div>

    );
}
export default Sponsors;*/
// Datos de los patrocinadores
const sponsorsData = [
    {
      id: 1,
      name: 'Patrocinador 1',
      image: logoMacro,
      link: '/patrocinador1',
    },
    {
      id: 2,
      name: 'Patrocinador 2',
      image: logoTanteSara,
      link: '/patrocinador2',
    },
    {
      id: 3,
      name: 'Patrocinador 3',
      image: logoPopper,
      link: '/patrocinador3',
    },
    {
      id: 3,
      name: 'Patrocinador 4',
      image: logoCerveza,
      link: '/patrocinador4',
    }
  ];
  
  function Sponsors() {
    return (
      <div className="sponsors-container">
        <h2>Nuestros Patrocinadores</h2>
        <div className="sponsors-grid">
          {sponsorsData.map((sponsor) => (
            <Link key={sponsor.id} to={sponsor.link}>
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
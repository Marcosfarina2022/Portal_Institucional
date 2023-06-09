import './sponsors.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ImagenSponsor1 from '../../Imgenes/imagenesSponsors/sponsor1.png';


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
      image: ImagenSponsor1,
      link: '/patrocinador1',
    },
    {
      id: 2,
      name: 'Patrocinador 2',
      image: 'ruta/patrocinador2.jpg',
      link: '/patrocinador2',
    },
    {
      id: 3,
      name: 'Patrocinador 3',
      image: 'ruta/patrocinador3.jpg',
      link: '/patrocinador3',
    },
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
                alt={sponsor.visa}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }
  
  export default Sponsors;
import React, { useState } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import './noticias.css';

const Noticias = () => {
  const [categoria, setCategoria] = useState('todas');
  const noticias = [
    { categoria: 'Infantiles', titulo: 'Noticia 1' },
    { categoria: 'Femenina', titulo: 'Noticia 2' },
    { categoria: 'Juvenil', titulo: 'Noticia 3' },
    { categoria: 'Adulto', titulo: 'Noticia 4' },
    { categoria: 'Veterano', titulo: 'Noticia 5' },
    { categoria: 'Hockey', titulo: 'Noticia 6' },
    // ...
  ];
  const categorias = ['todas', 'Infantiles', 'Femenina', 'Juvenil', 'Adulto', 'Veterano', 'Hockey'];

  const filtrarNoticias = (noticias, categoria) => {
    if (categoria === 'todas') {
      return noticias;
    } else {
      return noticias.filter(noticia => noticia.categoria === categoria);
    }
  };

  const noticiasFiltradas = filtrarNoticias(noticias, categoria);

  return (
    <div className="noticias-container">
      <div className="contenedor-titulo-boton">
      <Dropdown onSelect={setCategoria}>
          <Dropdown.Toggle as={Button} variant="primary" id="dropdown-categoria" className="boton-todas">
            {categoria}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {categorias.map(cat => (
              <Dropdown.Item key={cat} eventKey={cat}>{cat}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown><h1 className="titulo">Últimas Noticias del Club</h1>
       </div>
      <div className="noticias-grid">
        {noticiasFiltradas.map(noticia => (
          <div key={noticia.titulo} className="noticias-item">
            <h2 className="noticias-categoria">{noticia.categoria}</h2>
            <p className="noticias-titulo">{noticia.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noticias;

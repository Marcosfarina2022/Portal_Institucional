import React, { useState } from 'react';
import './noticias.css';

const Noticias = () => {
  const [categoria, setCategoria] = useState('todas'); // Estado para almacenar la categoría seleccionada //

  const noticias = [
    {categoria: 'juveniles' , titulo: 'Noticia 1' },
    { titulo: 'Noticia 2', categoria: 'infantiles' },
    { titulo: 'Noticia 3', categoria: 'femeninos' },
    { titulo: 'Noticia 4', categoria: 'adultos' },
    { titulo: 'Noticia 5', categoria: 'categoria1' },
    { titulo: 'Noticia 6', categoria: 'categoria3' },
    // ...
  ];

  const categorias = ['todas', 'categoria1', 'categoria2', 'categoria3'];

  // Función para filtrar las noticias según la categoría seleccionada //
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
      <h1 className="titulo">Noticias</h1>
      <div className="categorias">
        <button
          className={`categoria ${categoria === 'todas' ? 'categoria-activa' : ''}`}
          onClick={() => setCategoria('todas')}
        >
          Todas
        </button>
        {categorias.map(cat => (
          <button
            key={cat}
            className={`categoria ${categoria === cat ? 'categoria-activa' : ''}`}
            onClick={() => setCategoria(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="noticias-grid">
        {noticiasFiltradas.map(noticia => (
          <div key={noticia.titulo} className="noticias-item">
            <h2 className="noticias-titulo">{noticia.titulo}</h2>
            <p className="noticias-categoria">Categoría: {noticia.categoria}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noticias;

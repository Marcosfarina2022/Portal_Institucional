import React, { useState } from 'react';
import axios from 'axios';

const ImageUploadForm = () => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleNameChange = (e) => {
    setImageName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    
    // Crea un objeto FormData para enviar la imagen y otros datos al servidor
    const key = 'c8c772fbdeeef65807e6f575c1e3b288'
    const formData = new FormData();
    formData.append('key', key);
    formData.append('image', image);
    formData.append('name', imageName);


    try {
      // Realiza la solicitud POST al servidor utilizando axios
      const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Especifica el tipo de contenido como 'multipart/form-data' para el envío de archivos
        },
      });
      //Esta constante guarda la url de la imagen cargada
     const urlImg = response.data.data.url
     const imagenGaleria = {
      img_nombre: imageName,
      url: urlImg,
  };
// se realiza un POST a nuesta base de datos
  await fetch('http://localhost:4000/galeria/crear', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(imagenGaleria),
  })
      
     console.log('se guardo en la base de datos');
    } catch (error) {
      // Maneja los errores de la solicitud
      console.error('Error al enviar la imagen:', error);
    }

    



  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="imageName">Nombre del Archivo:</label>
        <input
          type="text"
          id="imageName"
          value={imageName}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="image">Cargar Archivo:</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};

export default ImageUploadForm;
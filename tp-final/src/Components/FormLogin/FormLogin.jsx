import React, { Fragment, useState } from "react";
import './FormLogin';

const FormLogin = () => {

  const [datos, setDatos] = useState({
    nombre: "",
    apellido: ""
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.datos.name] : event.datos.value
    })
  };

  const enviarDatos = (event) => {
    event.preventDefault()
    console.log(`Enviando datos... ${datos.nombre}  ${datos.apellido}`);
  };
  
  return(
    <Fragment>
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-3">
        <input
          type="text"
          placeholder="Nombre"
          className="form-control"
          onChange={handleInputChange}
          name="nombre" />
        </div>
        <div className="col-md-3">
        <input
          type="text"
          placeholder="Apellido"
          className="form-control"
          onChange={handleInputChange}
          name="apellido" />
        </div>
        <button type="submit" className="btn btn-primary" >Enviar</button>
      </form>
    </Fragment>
  )
}

export default FormLogin;
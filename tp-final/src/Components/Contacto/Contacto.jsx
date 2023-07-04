import React from 'react';
import { useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { FaWhatsapp , FaClock , FaEnvelope} from "react-icons/fa";
import './Contacto.css'

const Contacto = () => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText,] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Nombre: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Texto: ${text}`);
  };

    return(
    <div className='todo'>
       <div className='form'>
        <Form onSubmit={handleSubmit} className='contenido'>
        <h2>Escribinos</h2>
            <Row>
                <Col>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" onChange={(e) => setName(e.target.value)}  />
                </Col>
                <Col>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control placeholder="Apellido" onChange={(e) => setSurname(e.target.value)}  />
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control type="email" placeholder="nombre@ejemplo.com" onChange={(e) => setEmail(e.target.value)}  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Tu Mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => setText(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                 enviar
            </Button>
        </Form>
        </div> 
    <div className='info'>
        <h5><strong>Direccion</strong> : Salta 2357</h5>
        <h5><FaClock/> Lunes a Viernes de 13:00 a 21:00 hs </h5>
        <h5><FaWhatsapp/> 2964566780</h5>
        <h5><FaEnvelope/> clasaguilas@gmail.com</h5>
    </div>
    </div>
    )
}

export default Contacto
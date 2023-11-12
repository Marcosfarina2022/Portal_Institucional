import React from 'react';
import { useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { FaWhatsapp, FaClock, FaEnvelope } from "react-icons/fa";
import './Contacto.css'

const Contacto = () => {


    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText,] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            consulta: text,
            nombre: name,
            apellido: surname,
            correo_electronico: email
        };

        await fetch('https://porta-institucional.onrender.com/contacto/agregar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Error en la solicitud');
            })
            .then((data) => {
                // Maneja la respuesta de tu backend, por ejemplo, muestra un mensaje de éxito.
                console.log('Solicitud POST exitosa', data);
            })
            .catch((error) => {
                // Maneja cualquier error que ocurra durante la solicitud POST.
                console.error('Error al enviar la solicitud POST', error);
            });

        /*const handleSubmit = (event) => {
            event.preventDefault();
    
            console.log(name,text,surname,email)
    
            // Crear objeto con los datos del formulario
            const datosUsuario = {
                'consulta':text,
                'nombre': name,
                'apellido':surname,
                'correo_electronico': email
            };
    
            // Enviar los datos al servidor
            fetch('localhost:4000/contacto/agregar', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datosUsuario)
            }).then(response => response.json())
                .then(data => {
    
                    // Aquí puedes manejar la respuesta del servidor
                    console.log('Respuesta del servidor:', data);
                })
                .catch(error => {
                    // Aquí puedes manejar el error en caso de fallo en la solicitud
                    console.error('Error al enviar los datos:', error);
                });*/
    };

    return (
        <div className='todo'>
            <div className='form'>
                <Form onSubmit={handleSubmit} className='contenido' >
                    <h2 className='titulo1'>Escribinos</h2>
                    <Row className='rowContacto'>
                        <Col>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
                        </Col>
                        <Col>
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control placeholder="Apellido" onChange={(e) => setSurname(e.target.value)} />
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control type="email" placeholder="nombre@ejemplo.com" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Tu Mensaje</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={(e) => setText(e.target.value)} />
                    </Form.Group>
                    <div className='d-grid col-2 gap-2 mx-auto'>
                        <Button variant="dark" type="submit" className='boton_color' >
                            enviar
                        </Button>
                    </div>
                </Form>
            </div>
            <div className='info'>
                <h5><strong>Direccion</strong> : Salta 2357</h5>
                <h5><FaClock /> Lunes a Viernes de 13:00 a 21:00 hs </h5>
                <h5><FaWhatsapp /> 2964566780</h5>
                <h5><FaEnvelope /> clasaguilas@gmail.com</h5>
            </div>
        </div>
    )
}

export default Contacto
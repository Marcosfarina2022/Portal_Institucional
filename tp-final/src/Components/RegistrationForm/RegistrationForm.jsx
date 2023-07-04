import React, { useState } from 'react';
import './RegistrationForm.css';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import  logoCLA  from "../../Imgenes/LogoCLA2.png";
import { LinkContainer } from 'react-router-bootstrap';

//asd
const RegistrationForm = () => {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword,] = useState('');
  const [confirPassword,setConfirPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    if(confirPassword===password){
    console.log(`Nombre: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Contrasena: ${password}`);
    }else{
      alert("las contraseñas no coinciden")
    }
  };

  return (
    <div className='box'>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body className="card-body">
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                  <img src={logoCLA} alt="Logo" />
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="Nombre">
                        <Form.Label className="text-center">Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su nombre" onChange={(e) => setName(e.target.value)} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">Correo Electronico</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su email" onChange={(e) => setEmail(e.target.value)} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirmar contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setConfirPassword(e.target.value)} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">Registrase</Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                    <LinkContainer to="/Ingresar">
                      <p className="mb-0  text-center">
                        ¿Ya dispones de un usuario?{' '}
                        <a href="{''}" className="text-primary fw-bold">
                          Ingresar
                        </a>
                      </p>
                    </LinkContainer>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegistrationForm;
import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import  logoCLA  from "../../Imagenes/LogoCLA2.png";
import { LinkContainer } from "react-router-bootstrap";

const FormLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword,] = useState('');

  const handleInputChange = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Contrasena: ${password}`);
  };

  return(

    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={6} lg={4} xs={8}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                  <img className="img-registrationForm" src={logoCLA} alt="Logo" />
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={handleInputChange}>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">Correo Electronico</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su email" onChange={(e) => setEmail(e.target.value)} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">Ingresar</Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                    <LinkContainer to="/registro">
                      <p className="mb-0  text-center">
                        ¿No dispones de una cuenta? {''}
                        <a href="{''}" className="text-primary fw-bold">
                          Registrase
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
      
  )
}

export default FormLogin;
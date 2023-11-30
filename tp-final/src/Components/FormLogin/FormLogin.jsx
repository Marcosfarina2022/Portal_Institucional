import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import  logoCLA  from "../../Imagenes/LogoCLA2.png";
import { LinkContainer } from "react-router-bootstrap";
import { Redirect, useNavigate } from "react-router-dom";
import './FormLogin.css';

const FormLogin = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = async (event) => {
    event.preventDefault();

    if ( !email || !password ) {
      setError("Todos los campos son obligatorios");
      return;
    }

const data = {
  email:email,
  password:password
}
      try {
        const response = await fetch("http://localhost:4000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify(data),
        });

        if (response.ok) {
          setIsLogin(true)
          const data = await response.json();
          console.log(data);
          navigate("/")
          // Limpiar errores si la solicitud es exitosa
          setError(null);
        } else {
          setIsLogin(false);
          alert("usuario o contraseña incorrecta");
          setError("Error al registrar el usuario");
        } 

      } catch (error) {
        console.error("Error en la solicitud:", error);
        setError("Error en la solicitud");
      }

  };
  

  return(<>
      <Container className='containerLogin'>
        <Row className="d-flex justify-content-center align-items-center">
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
                        <Button className="colorBoton" variant="dark" type="submit" >Ingresar</Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                    <LinkContainer to="/registro">
                      <p className="mb-0  text-center">
                        ¿No dispones de una cuenta? {''}
                        <a href="{''}" className="fw-bold colorLink">
                          Registrarse
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
      </>  
  )
}

export default FormLogin;
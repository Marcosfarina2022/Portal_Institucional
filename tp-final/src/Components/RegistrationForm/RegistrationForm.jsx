import React, { useState } from 'react';
import './RegistrationForm.css';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import  logoCLA  from "../../Imagenes/LogoCLA2.png";
import { LinkContainer } from 'react-router-bootstrap';


const RegistrationForm = () => {
    
    const [nombre, setNombre] = useState("");
    // const [apellido, setApellido] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirPassword, setConfirPassword] = useState("");
    const [error, setError] = useState(null);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!nombre ||!fechaNacimiento || !email || !password || !confirPassword) {
        setError("Todos los campos son obligatorios");
        return;
      }
  
      if (confirPassword === password) {
        try {
          const response = await fetch("http://localhost:4000/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username:nombre,
                date:fechaNacimiento,
                email:email,
                password:password
            }),
          });
  
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            // Limpiar errores si la solicitud es exitosa
            setError(null);
          } else {
            setError("Error al registrar el usuario");
          }
        } catch (error) {
          console.error("Error en la solicitud:", error);
          setError("Error en la solicitud");
        }
      } else {
        setError("Las contraseñas no coinciden");
      }
    };

    return (
      <>
        {error && <div className="error-message">{error}</div>}
        <Container className="containerRegistro">
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={6} lg={4} xs={8}>
              <Card className="px-4">
                <Card.Body className="cardbodyForm">
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-center text-uppercase ">
                      <img
                        className="img-registrationForm"
                        src={logoCLA}
                        alt="Logo"
                      />
                    </h2>
                    <div className="mb-3">
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="Nombre">
                          <Form.Label className="text-center">Nombre</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Ingrese su nombre"
                            onChange={(e) => setNombre(e.target.value)}
                          />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="apellido">
                          <Form.Label className="text-center">Apellido</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Ingrese su apellido"
                            onChange={(e) => setApellido(e.target.value)}
                          />
                        </Form.Group> */}
                        <Form.Group className="mb-3" controlId="fechaNacimiento">
                          <Form.Label className="text-center">Fecha de Nacimiento</Form.Label>
                          <Form.Control
                            type="date"
                            onChange={(e) => setFechaNacimiento(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Correo Electronico
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Ingrese su email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Form.Group>
  
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Contraseña</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Contraseña"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Form.Group>
  
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicConfirmPassword"
                        >
                          <Form.Label>Confirmar contraseña</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Contraseña"
                            onChange={(e) => setConfirPassword(e.target.value)}
                          />
                        </Form.Group>
  
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        ></Form.Group>
                        <div className="d-grid">
                          <Button
                            className="colorBoton"
                            variant="dark"
                            type="submit"
                          >
                            Registrase
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <LinkContainer to="/Ingresar">
                          <p className="mb-0  text-center">
                            ¿Ya dispones de un usuario?{" "}
                            <a href="{''}" className="colorLink fw-bold">
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
      </>
    );
  };

export default RegistrationForm;

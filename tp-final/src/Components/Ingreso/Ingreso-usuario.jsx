import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import logoCLA from "../../Imagenes/LogoCLA2.png";
import { LinkContainer } from "react-router-bootstrap";
import './ingreso.css';
import PanelAdmin from "../Home/PanelAdmin";

const IngresoUsuarios = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = async (event) => {
    event.preventDefault();
    try {
      const respuesta = await fetch('http://localhost:4000/auth/ingreso', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!respuesta.ok){
        throw new Error('No se pudo completar el registro. Verifica tus datos e inténtalo nuevamente.');
      }
      const responseData = await respuesta.json();
      setUserRole(responseData.role);
      setError(null);
      // Maneja la respuesta del backend
    } catch (error) {
      handleLoginError(error);
    }
  };

  const handleLoginError = (error) => {
    console.error("Error en el inicio de sesión:", error);
    setError('Hubo un error en el inicio de sesión. Verifica tus credenciales.')
  };

return (
    <div>
      {userRole === 'admin' || userRole === 'user' ? (
        <PanelAdmin userRole={userRole} />
      ) : (
        <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body className="d-flex flex-column align-items-center">
                <img  src={logoCLA} alt="Logo" className="mb-4 logo-image"/>
                <div className="mt-3">
                      <Form onSubmit={handleInputChange} className="w-100">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">Correo Electrónico</Form.Label>
                          <Form.Control type="email" placeholder="Ingrese su email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Contraseña</Form.Label>
                          <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
                        <div className="d-grid">
                          <Button variant="primary" type="submit">Ingresar</Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <LinkContainer to="/registro">
                          <p className="mb-0  text-center">
                            ¿No tienes una cuenta?{' '}
                            <a href="#registrarse" className="text-primary fw-bold">
                              Regístrate
                            </a>
                          </p>
                        </LinkContainer>
                      </div>
                      {error && <div className="mt-3 text-danger">{error}</div>} {/* Mostrar mensaje de error si existe */}
                    </div>
                  
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default IngresoUsuarios;
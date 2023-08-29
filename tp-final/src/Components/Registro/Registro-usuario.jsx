import React, { useState } from "react";
import { Col, Row, Container, Card, Form, Button } from "react-bootstrap";
import logoCLA from "../../Imagenes/LogoCLA2.png";
import { LinkContainer } from "react-router-bootstrap";
import PanelAdmin from "../Home/PanelAdmin";
import "./registro.css";

const RegistroUsuarios = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirPassword: "",
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { password, confirPassword } = formData;

    if (confirPassword === password) {
      try {
        const response = await fetch("http://localhost:4000/auth/registro", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error(
            "No se pudo completar el registro. Por favor, verifica tus datos e inténtalo nuevamente."
          );
        }

        const data = await response.json();
        console.log("Registro exitoso", data);
        setUserRole(data.role);
        setLoggedIn(true);
      } catch (error) {
        console.error("Error en el registro:", error);
      }
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  if (loggedIn) {
    return <PanelAdmin userRole={userRole} />;
  }

  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body className="d-flex flex-column align-items-center">
                <img src={logoCLA} alt="Logo" className="mb-4 logo-image" />
                <div className="mb-3">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="Nombre">
                      <Form.Label className="text-center">
                        Nombre completo
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nombre completo"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Apellido">
                      <Form.Label className="text-center">Apellido</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingrese su apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Correo Electronico
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Ingrese su email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
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
                        name="confirPassword"
                        value={formData.confirPassword}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <div className="d-grid">
                      <Button variant="primary" type="submit">
                        Registrarse
                      </Button>
                    </div>
                  </Form>
                  <div className="mt-3">
                    <LinkContainer to="/ingreso">
                      <p className="mb-0  text-center">
                        ¿Ya dispones de un usuario?{"./ingresar"}
                        <a href="#ingresar" className="text-primary fw-bold">
                          Ingresar
                        </a>
                      </p>
                    </LinkContainer>
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

export default RegistroUsuarios;
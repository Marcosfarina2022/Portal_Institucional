import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image1 from '../../Imgenes/imgNoticias/1.svg';
import Image2 from '../../Imgenes/imgNoticias/2.svg';
import Image3 from '../../Imgenes/imgNoticias/3.svg';
import './Content.css';

const Content = () =>{
return(<>
    <div className="content">
      <div className='container'>
        <div className="row">
          <div className="col-md-4 mb-4 mt-4"> {/* Agregado mt-4 para margen superior */}
            <Card>
              <Card.Img variant="top" src={Image1} />
              <Card.Body>
                <Card.Title>Águilas Jr.</Card.Title>
                <Card.Text>
                Nuestra escuela de rugby para niños ofrece una experiencia deportiva divertida y educativa. Los niños aprenderán los fundamentos del rugby y podrán desarrollar sus habilidades en un ambiente seguro y amigable. ¡Inscríbete a nuestra escuela y forma parte de la familia del rugby!
                </Card.Text>
                <Button variant="primary">Leer más...</Button>
              </Card.Body>
            </Card>
          </div>

          {/* Segunda Card */}
          <div className="col-md-4 mb-4 mt-4"> {/* Agregado mt-4 para margen superior */}
            <Card>
              <Card.Img variant="top" src={Image2} />
              <Card.Body>
                <Card.Title>Equipo de Hockey Femenino</Card.Title>
                <Card.Text>
                  El equipo de hockey femenino del club ha tenido una destacada participación en los últimos torneos. Han logrado clasificar a la fase final y se encuentran en la lucha por el campeonato. ¡Apoya a nuestras jugadoras y disfruta del emocionante hockey en cada partido!
                </Card.Text>
                <Button variant="primary">Leer más...</Button>
              </Card.Body>
            </Card>
          </div>

          {/* Tercera Card */}
          <div className="col-md-4 mb-4 mt-4"> {/* Agregado mt-4 para margen superior */}
            <Card>
              <Card.Img variant="top" src={Image3} />
              <Card.Body>
                <Card.Title>Escuela de Rugby para Niños</Card.Title>
                <Card.Text>
                El equipo de rugby del club ha obtenido excelentes resultados en la última temporada. Han logrado alcanzar la final del torneo local y se preparan para competir a nivel regional. ¡Únete a nosotros y sé parte de este exitoso equipo!
                </Card.Text>
                <Button variant="primary">Leer más...</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
</>)
} 


export default Content
import React, { useState, useEffect } from 'react';
import "./LineaDeTiempo.css";

const LineaDeTiempo = () => {
    const [events, setEvents] = useState([
        { id: 1, title: 'Fecha constitucion del club 09/04/1990', date: ''},
        { id: 2, title: 'Primeros entrenamientos', date: 'febrero 1990'},
        { id: 3, title: 'Se consigue predio!', date: 'marzo 1991'},
        { id: 4, title: 'Primer participacion en torneo', date: 'marzo 1991'},
        { id: 5, title: 'Campeones torneo local apertura 1992', date: 'junio 1992'},
        { id: 6, title: 'Gira historica sudafrica 1998', date: 'febrero 1998'},
        { id: 7, title: 'Campeones torneo local clausura 1999', date: 'diciembre 1999'},
        { id: 8, title: 'Nuevo predio anexo!', date: 'enero 2000'},
        { id: 9, title: 'Nueva cancha rugby', date: 'febrero 2001'},
        { id: 10, title: 'Ascenso a torneo regional patagonico', date: 'octubre 2022'}
    ]);
    return ( <>
            <h2>Nuestra Historia</h2>
        <div id='lineaDeTiempo'>
            {events.map(event => (
                <div className= 'child efecto'  key={event.id}>
                    <div className="content">
                        <h6>{event.title}</h6>
                        <p>{event.date}</p>
                    </div>
                </div>
            ))}

        </div>
        </>
    );
};

export default LineaDeTiempo;
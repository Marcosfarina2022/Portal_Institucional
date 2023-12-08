import React, { useState, useEffect } from 'react';
import "./LineaDeTiempo.css";

const LineaDeTiempo = () => {
    const [events, setEvents] = useState([

        { id: 1, title: 'Fecha constitucion del club', date: 'Abril 1990'},
        { id: 2, title: 'Primeros entrenamientos', date: 'Febrero 1990'},
        { id: 3, title: 'Se consigue predio!', date: 'Marzo 1991'},
        { id: 4, title: 'Primer participacion en torneo', date: 'Marzo 1991'},
        { id: 5, title: 'Campeones torneo local apertura 1992', date: 'Junio 1992'},
        { id: 6, title: 'Gira historica sudafrica 1998', date: 'Febrero 1998'},
        { id: 7, title: 'Campeones torneo local clausura 1999', date: 'Diciembre 1999'},
        { id: 8, title: 'Nuevo predio anexo!', date: 'Enero 2000'},
        { id: 9, title: 'Nueva cancha rugby', date: 'Febrero 2001'},
        { id: 10, title: 'Ascenso a torneo regional patagonico', date: 'Octubre 2022'}
    ]);

    return ( <>
            <h2>Nuestra Historia</h2>
        <div id='lineaDeTiempo'>
            {events.map(event => (
                <div className= 'child efecto'  key={event.id}>
                    <div className="content">
                        <h4><b>{event.date}</b></h4>
                        <h5><i>{event.title}</i></h5>
                    </div>
                </div>
            ))}

        </div>
        </>
    );
};

export default LineaDeTiempo;
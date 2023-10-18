import React, { useState, useEffect } from 'react';
import "./LineaDeTiempo.css";

const LineaDeTiempo = () => {
    const [events, setEvents] = useState([
        { id: 1, title: 'FECHA CONSTITUCION DEL CLUB 09/04/1990', date: ''},
        { id: 2, title: 'PRIMEROS ENTRENAMIENTOS', date: 'FEBRERO 1990'},
        { id: 3, title: 'SE CONSIGUE PREDIO!', date: 'MARZO 1991'},
        { id: 4, title: 'PRIMER PARTICIPACION EN TORNEO', date: 'MARZO 1991'},
        { id: 5, title: 'CAMPEONES TORNEO LOCAL APERTURA 1992', date: 'JUNIO 1992'},
        { id: 6, title: 'GIRA HISTORICA SUDAFRICA 1998', date: 'FEBRERO 1998'},
        { id: 7, title: 'CAMPEONES TORNEO LOCAL CLAUSURA 1999', date: 'DICIEMBRE 1999'},
        { id: 8, title: 'NUEVO PREDIO ANEXO!', date: 'ENERO 2000'},
        { id: 9, title: 'NUEVA CANCHA RUGBY', date: 'FEBRERO 2001'},
        { id: 10, title: 'ASCENSO A TORNEO REGIONAL PATAGONICO', date: 'OCTUBRE 2022'}
    ]);

    return ( <>
            <h2>Nuestra Historia</h2>
        <div id='lineaDeTiempo'>
            {events.map(event => (
                <div className= 'child efecto'  key={event.id}>
                    <div className="content">
                        <h4>{event.title}</h4>
                        <p>{event.date}</p>
                    </div>
                </div>
            ))}

        </div>
        </>
    );
};

export default LineaDeTiempo;
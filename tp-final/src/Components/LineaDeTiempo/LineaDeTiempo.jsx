import React, { useState } from 'react';
import "./LineaDeTiempo.css";

const LineaDeTiempo = () => {
    const [events, setEvents] = useState([
        { id: 1, title: 'Event 1', date: 'January 1st, 2021' },
        { id: 2, title: 'Event 2', date: 'February 14th, 2021' },
        { id: 3, title: 'Event 3', date: 'March 20th, 2021' },
        { id: 4, title: 'Event 4', date: 'April 30th, 2021' },
        { id: 5, title: 'Event 5', date: 'May 15th, 2021' },
        { id: 6, title: 'Event 6', date: 'June 21st, 2021' },
        { id: 7, title: 'Event 7', date: 'July 4th, 2021' },
        { id: 8, title: 'Event 8', date: 'August 10th, 2021' },
        { id: 9, title: 'Event 9', date: 'September 22nd, 2021' },
        { id: 10, title: 'Event 10', date: 'October 31st, 2021' }
    ]);

    return ( <>
            <h2>Nuestra Historia</h2>
        <div id='lineaDeTiempo'>
            {events.map(event => (
                <div className='child' key={event.id}>
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
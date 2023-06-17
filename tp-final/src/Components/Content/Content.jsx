import React from 'react';
import './Content.css';
import Cards from "../Cards/Cards";
import Sponsors from "../Sponsors/Sponsors";

const Content = () => {
  return (
    <div className='contenedor'>
    <Cards></Cards>
    <Sponsors/>
    </div>
  );
}


export default Content;
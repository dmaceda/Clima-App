import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { WiStrongWind } from "react-icons/wi"
export default function Card ({min, max, name, img, onClose, id, temp, country, wind}) {
    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn">X</button>
        </div>
        <div className="card-body">
          <Link to={`/ciudad/${id}`} className='link'>
          <h5 className="card-title">{name}, {country} </h5>
         
          </Link>
          <div className="viento">
              <p> <WiStrongWind/> {wind} km/h</p>
            </div>
          <div className='icono'>
              <h1 className='temp'> {temp} C°</h1> 
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="100" height="100" alt="" />
            </div>
          </div>
        </div>
     
    );
};

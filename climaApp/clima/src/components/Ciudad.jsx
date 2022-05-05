import React from "react";
import './Ciudad.css';
import { WiThermometerExterior, WiThermometer, WiNightAltCloudyHigh, } from "react-icons/wi";
import { AiOutlineCompass, AiFillCompass } from "react-icons/ai";



export default function Ciudad({city}) {
    return (
        <div className="ciudad">
            
                <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div> <WiThermometerExterior/> Minima: {city.min} C°</div>
                        <div> <WiThermometer /> Maxima: {city.max} C°</div>
                        <div> <WiNightAltCloudyHigh /> Nubes: {city.clouds}</div>
                        <div> <AiOutlineCompass /> Latitud: {city.latitud}º</div>
                        <div> <AiFillCompass /> Longitud: {city.longitud}º</div>
                    </div>
    </div>
        </div>
    )
}

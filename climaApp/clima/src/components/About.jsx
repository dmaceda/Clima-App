import React from 'react';
import './About.css'

export default function About(){
    return (
        <div className='contenedor'>
       <h4 className='titulo'>Weather App</h4>
       <h6 className='text'> La aplicación de pronóstico del tiempo es una SPA, <br/>
            trae la informacion de la API 'openweathermap.org'.<br/>
            Fue desarrollada en React.<br/>
            Nos entrega una tarjeta por cada ciudad que consultemos<br/>
            con la informacion del clima en tiempo real, viento y temperatura.<br/>
            Gracias al enrutamiento podemos acceder a otras <br/>
            secciones donde veremos informacion mas detallada.<br/> 
        </h6>
       </div>
    )
};


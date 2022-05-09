import React, { useState } from 'react';
import { Route, Switch} from 'react-router-dom'
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About';
import Ciudad from '../components/Ciudad';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.floor((recurso.main.temp_min) - 273.15),
            max: Math.round((recurso.main.temp_max) - 273.15),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: Math.round((recurso.main.temp) - 273.15 ),
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            country: recurso.sys.country
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">

      <Nav onSearch={onSearch} />

      <Switch>
            <Route
                path='/about'
                component={About}
            />

            <Route
                  exact path='/ciudad/:ciudadId'
                  render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
                />
                
             <Route
                path='/'
                render={() =>  <Cards
                cities={cities}
                onClose={onClose}
                />}
                />
      </Switch>
                  

      <div>
       
      </div>
  
    </div>
  );
}

export default App;

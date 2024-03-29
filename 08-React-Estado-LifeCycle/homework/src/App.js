import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import Nav from './components/Nav.jsx';

const API_KEY = "7255db7793802f2a696a5c4e2a1e9b45"

export default function App() {
  const [cities, setCities] = useState([])
  
  function addCity (city){
     setCities((prevCities)=>{
      return [city, ...prevCities]
     })
  }
  
  function removeCity(cityId){
     setCities((prevCities)=>{
      return prevCities.filter((city)=>{
        return cityId !== city.id
      })
     })
  }
  
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          const oldCity = cities.find((city) => city.id === ciudad.id)
          if (!oldCity){
            addCity(ciudad);
            }else{
              alert("La ciudad ya fue proporcionada");
            }
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }
  
    return (
    <div className="App">
    <div>
      <Nav />
        <SearchBar
          onSearch={onSearch}
        />
      </div>
      <div>
        <Cards
          cities={cities} onRemove={removeCity} 
        />
      </div>
   </div>
  );
}

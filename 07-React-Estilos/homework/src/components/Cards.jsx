import React from 'react';
import Card from './Card'
import s from '../Cards.module.css'

export default function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map
  if(!cities || cities.length ===0){
    return <div>Cargando</div>
  }
  return (
  <div className={s.cards}>
    {cities.map((city) => (
      <Card
          key={city.id}
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
        />
    ))}
  </div>
  );
};
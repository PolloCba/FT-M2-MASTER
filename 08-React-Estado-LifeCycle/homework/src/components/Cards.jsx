import React from 'react';
import Card from './Card'
import s from './Cards.module.css'

export default function Cards({ cities, onRemove }) {
  if(!cities || cities.length ===0){
    return <div>Cargando</div>
  }
  return (
  <div className={s.cards}>
    {cities.map((city) => (
      <Card
          key={city.id}
          max={city.max}
          min={city.min}
          name={city.name}
          img={city.img}
          onClose={() => onRemove(city.id)}
        />
    ))}
  </div>
  );
};
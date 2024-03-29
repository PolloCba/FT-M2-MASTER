import React from 'react';

export default function Card({max ,min, name, img, onClose}) {
  // acá va tu código
  return (
  <div>
    <button onClick={onClose}>X</button>
      <div>
        <span>{name}</span>
      </div>
      <div>
        <div>
          <span>Min</span>
          <span>{min}</span>
        </div>
        <div>
          <span>Max</span>
          <span>{max}</span>
        </div>
        <div>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={`clima-${img}`}/>
        </div>
      </div>
  </div>
  )
};
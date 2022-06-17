import React from 'react';
import s from './Card.module.css'

export default function Card({max ,min, name, img, onClose}) {
  // acá va tu código
  return (
  <div className={s.principal}>
    <button onClick={onClose} className={s.btn}>X</button>
      <div>
        <span className={s.cardTitle}>{name}</span>
      </div>
      <div className= {s.medio}>
        <div className={s.temp}>
          <span className={s.tempName}>Min</span>
          <span className={s.minTemp}>{min}</span>
        </div>
        <div className={s.temp}>
          <span className={s.tempName}>Max</span>
          <span className={s.maxTemp}>{max}</span>
        </div>
        <div>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={`clima-${img}`}/>
        </div>
      </div>
  </div>
  )
};
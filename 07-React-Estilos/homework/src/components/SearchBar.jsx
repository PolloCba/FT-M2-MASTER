import React from 'react';
import s from '../SearchBar.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  const buscar = ()=>{
    const inputSearch = document.querySelector('#inputSearch')
    onSearch(inputSearch.value)
    inputSearch.focus()
  }
  return <div>
    <input id="inputSearch" type="text"/> 
    <button onClick={buscar} className={s.btn}>Buscar</button>
    </div>
};
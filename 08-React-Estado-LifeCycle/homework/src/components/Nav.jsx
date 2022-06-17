import React from 'react';
import Logo from '../logoHenry.png'
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
      <img src={Logo} alt=""/>
      <h1>Wheater App</h1>
    </div>
  );
};

export default Nav;

import React from 'react';
import Logo from '../img/sun.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';



function Nav({onSearch}) {
  return (
    <nav className="nav-contenedor">
      <Link to='/'>
        <span className="nav">
          <img id="logo" src={Logo} width="35" height="35" alt="" />
          Weather App
        </span>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
        <Link to='/about'>
        <span className='about'>About</span>
      </Link>
    </nav>
  );
};

export default Nav;
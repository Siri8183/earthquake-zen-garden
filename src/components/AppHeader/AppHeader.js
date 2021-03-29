import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.css';
import logo from '../../../public/realtor-com.png';

const AppHeader = () => {
  return (
    <nav className='header'>
      <div className='logo'>
        <NavLink to='/'>
          <img src={logo} alt='logo' />
        </NavLink>
      </div>
      <h1>Earthquake Zen Garden</h1>
      <div className='user'>
        <NavLink className='navlink' activeClassName='active' to='/user'>
          Welcome Sally
        </NavLink>
      </div>
    </nav>
  );
};

export default AppHeader;

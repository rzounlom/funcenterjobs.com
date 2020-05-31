import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import NavToggle from './NavToggle/NavToggle';

const Nav = () => {
  return (
    <div className='Nav'>
      <div className='nav-menu-container'>
        <Link to='/'>
          <div className='nav-logo'>Careers at Generations AdventurePlex</div>
        </Link>

        <ul className='nav-menu'>
          <div className='nav-toggle'>
            {' '}
            <NavToggle />
          </div>

          <Link to='/' className='nav-menu-item'>
            About
          </Link>
          <Link to='/jobs' className='nav-menu-item'>
            Jobs
          </Link>
          <Link to='/contact' className='nav-menu-item'>
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

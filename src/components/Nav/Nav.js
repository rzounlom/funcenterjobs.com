import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import NavToggle from './NavToggle/NavToggle';

const Nav = () => {
  return (
    <div className='Nav'>
      <div className='nav-menu-container'>
        <Link to='/'>
          <div className='nav-logo'>Careers at Generations</div>
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
          <a
            href='mailto:tcruthi1@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='nav-menu-item'
          >
            Contact
          </a>
          <a
            className='nav-menu-item'
            target='_blank'
            rel='noopener noreferrer'
            style={{ fontSize: '1em' }}
            href='https://www.google.com/maps/place/1018+W+Edison+Rd,+Mishawaka,+IN+46545/@41.694734,-86.1981197,17z/data=!3m1!4b1!4m5!3m4!1s0x8816cd8b31e76335:0xcdabd144e62763e6!8m2!3d41.694734!4d-86.195931'
          >
            Location
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

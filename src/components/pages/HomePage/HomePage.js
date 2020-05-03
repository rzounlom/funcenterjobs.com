import React from 'react';
import './HomePage.scss';
import Landing from './Landing/Landing';
import About from './About/About';

const HomePage = () => {
  return (
    <div className='HomePage'>
      <Landing />
      <About />
    </div>
  );
};

export default HomePage;

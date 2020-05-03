import React, { Component } from 'react';
import './About.scss';
import AOS from 'aos';

class About extends Component {
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration: 1000,
    });
  }

  componentWillReceiveProps() {
    AOS.refresh();
  }

  render() {
    return (
      <div className='About'>
        <div data-aos='fade-right' className='about-section who-we-are'>
          <div className='about-heading'>WHO WE ARE:</div>
          <p>
            We are a modern, social-based entertainment complex based in
            Mishawaka, Indiana. We offer food, games, amusement attractions,
            panoramic sports viewing screens and private event space designed
            for high quality recreational experiences.
          </p>
        </div>
        <div data-aos='fade-left' className='about-section who-we-are'>
          <div className='about-heading'>OUR LOCATION:</div>
          <p>
            We are located at{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              style={{ fontSize: '1em' }}
              href='https://www.google.com/maps/place/1018+W+Edison+Rd,+Mishawaka,+IN+46545/@41.694734,-86.1981197,17z/data=!3m1!4b1!4m5!3m4!1s0x8816cd8b31e76335:0xcdabd144e62763e6!8m2!3d41.694734!4d-86.195931'
            >
              1018 West Edison Road, Mishawaka,Indiana 46545
            </a>
            , next to Cinemark Movies 14.
          </p>
        </div>
        <div data-aos='fade-right' className='about-section mission'>
          <div className='about-heading'>OUR MISSION:</div>
          <p>
            Our mission is to become a top regional destination for food and
            entertainment, a top employer, and one of the best places to work in
            the region.
          </p>
        </div>
        <div data-aos='fade-left' className='about-section values'>
          <div className='about-heading'>OUR COMPANY VALUES ARE:</div>
          <div className='core-values-container'>
            <div className='core-values-item-1'>People</div>
            <div className='core-values-item-2'>Innovation</div>
            <div className='core-values-item-3'>Integrity</div>
            <div className='core-values-item-4'>Growth</div>
            <div className='core-values-item-5'>Giggles</div>
            <div className='core-values-item-6'>Ownership</div>
          </div>
        </div>
        <div data-aos='fade-right' className='about-section teammates'>
          <div className='about-heading'>OUR IDEAL TEAMMATES ARE:</div>
          <div className='teammates-container'>
            <div className='teammates-item'>
              People who show value and kindness to themselves and everyone they
              interact with
            </div>
            <div className='teammates-item'>
              People who are innovative thinkers – solve problems we didn’t know
              we had
            </div>
            <div className='teammates-item'>
              People who have integrity - own their mistakes and learn from them
            </div>
            <div className='teammates-item'>
              People who want to grow – committed to getting better at their
              craft and professional development
            </div>
            <div className='teammates-item'>
              People who turn frowns into smiles - spread joy to our guests and
              their teammates
            </div>
            <div className='teammates-item'>
              People who have an entrepreneurial spirit and take ownership of
              their positions - we don’t micromanage
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

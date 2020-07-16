import React, { Component } from 'react';
import './Jobs.scss';
import AOS from 'aos';
import Benefits from '../Benefits/Benefits';
import Job1Modal from './JobsModals/Job1Modal';
import Job2Modal from './JobsModals/Job2Modal';
import Job3Modal from './JobsModals/Job3Modal';
import Job4Modal from './JobsModals/Job4Modal';

class Jobs extends Component {
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
      <div className='Jobs'>
        <div data-aos='fade-right' className='jobs-section'>
          <Benefits />
        </div>
        <div data-aos='fade-left' className='jobs-section values'>
          <div className='about-heading'>
            CURRENTLY RECRUITING: <br />
            <span className='job-fair'>
              <a
                href='https://recruiting.myapps.paychex.com/appone/MainInfoReq.asp?R_ID=3063571'
                target='_blank'
                rel='noopener noreferrer'
              >
                2020 Job Fair{' '}
              </a>
              this Saturdat July 18th from 10AM-5PM at 711 West McKinley Ave,
              Mishawaka, IN 46545
            </span>
          </div>
          <div data-aos='fade-left' className='jobs-container'>
            <div className='jobs-item jobs-item-1'>
              <div className='job-info'>
                <div className='job-info-heading'>Guest Services Manager</div>
                <Job1Modal />
              </div>
            </div>
            <div className='jobs-item jobs-item-2'>
              <div className='job-info'>
                <div className='job-info-heading'>Attractions Manager</div>
                <Job2Modal />
              </div>
            </div>
            <div className='jobs-item jobs-item-3'>
              <div className='job-info'>
                <div className='job-info-heading'>Sales Manager</div>
                <Job3Modal />
              </div>
            </div>
            <div className='jobs-item jobs-item-4'>
              <div className='job-info'>
                <div className='job-info-heading'>Executive Chef</div>
                <Job4Modal />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jobs;

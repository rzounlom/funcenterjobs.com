import React, { Component } from 'react';
import './Jobs.scss';
import { Button, Icon } from 'semantic-ui-react';
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
          </div>
          <div data-aos='fade-left' className='jobs-container'>
            {/* <div className='jobs-item jobs-item-1'>
              <div className='job-info'>
                <div className='job-info-heading'>
                  Assistant General Manager
                </div>
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
            </div> */}

            <div className='jobs-item jobs-item-5'>
              <div className='job-info'>
                <div className='job-info-heading'>Team Members</div>
                <a
                  href='https://recruiting.myapps.paychex.com/appone/MainInfoReq.asp?R_ID=3005118'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button color='blue'>
                    <Icon name='checkmark' /> Apply Now
                  </Button>
                </a>
              </div>
            </div>
            <div className='jobs-item jobs-item-6'>
              <div className='job-info'>
                <div className='job-info-heading'>
                  Cooks (Prep, Line, Pizza)
                </div>
                <a
                  href='https://recruiting.myapps.paychex.com/appone/MainInfoReq.asp?R_ID=3004671'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button color='blue'>
                    <Icon name='checkmark' /> Apply Now
                  </Button>
                </a>
              </div>
            </div>
            <div className='jobs-item jobs-item-7'>
              <div className='job-info'>
                <div className='job-info-heading'>Servers</div>
                <a
                  href='https://recruiting.myapps.paychex.com/appone/MainInfoReq.asp?R_ID=3004848'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button color='blue'>
                    <Icon name='checkmark' /> Apply Now
                  </Button>
                </a>
              </div>
            </div>
            <div className='jobs-item jobs-item-8'>
              <div className='job-info'>
                <div className='job-info-heading'>Dishwashers</div>
                <a
                  href='https://recruiting.myapps.paychex.com/appone/MainInfoReq.asp?R_ID=3004851'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button color='blue'>
                    <Icon name='checkmark' /> Apply Now
                  </Button>
                </a>
              </div>
            </div>
            <div className='jobs-item jobs-item-9'>
              <div className='job-info'>
                <div className='job-info-heading'>Runners</div>
                <a
                  href='https://recruiting.myapps.paychex.com/appone/MainInfoReq.asp?R_ID=3004853'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button color='blue'>
                    <Icon name='checkmark' /> Apply Now
                  </Button>
                </a>
              </div>
            </div>
            <div className='jobs-item jobs-item-10'>
              <div className='job-info'>
                <div className='job-info-heading'>
                  Beverage Wall and Wine Attendants
                </div>
                <a
                  href='https://recruiting.myapps.paychex.com/appone/MainInfoReq.asp?R_ID=3004863'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button color='blue'>
                    <Icon name='checkmark' /> Apply Now
                  </Button>
                </a>
              </div>
            </div>
            <div className='jobs-item jobs-item-11'>
              <div className='job-info'>
                <div className='job-info-heading'>
                  Attractions Manager (Maintenance)
                </div>
                <a
                  href='https://recruiting.myapps.paychex.com/appone/MainInfoReq.asp?R_ID=3005173'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button color='blue'>
                    <Icon name='checkmark' /> Apply Now
                  </Button>
                </a>
              </div>
            </div>
            <div className='jobs-item jobs-item-12'>
              <div className='job-info'>
                <div className='job-info-heading'>
                  General Maintenance and Repair
                </div>
                <a
                  href='https://recruiting.myapps.paychex.com/appone/MainInfoReq.asp?R_ID=3005177'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button color='blue'>
                    <Icon name='checkmark' /> Apply Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jobs;

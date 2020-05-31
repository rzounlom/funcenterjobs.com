import React, { Component } from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';

class Job2Modal extends Component {
  state = { open: false };

  show = (dimmer) => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;

    return (
      <div>
        <button className='job-info-btn' onClick={this.show('blurring')}>
          View Description
        </button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Attractions Manager (Maintenance)</Modal.Header>
          <Modal.Content scrolling>
            <Modal.Description>
              <div className='job-description'>
                <div className='job-item'>
                  <div className='job-item-title'>Overview:</div>
                  <div className='job-item-content'>
                    <ul>
                      <li>
                        Perform maintenance activity on amusement attractions
                        and arcade games.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='job-item'>
                  <div className='job-item-title'>General Description:</div>
                  <div className='job-item-content'>
                    <ul>
                      <li>
                        Test attraction machines and equipment to determine
                        proper functioning.
                      </li>
                      <li>
                        Make service calls to attraction and equipment vendors
                        for maintenance, repairs, or replacements.
                      </li>
                      <li>
                        Perform routine monitoring, such as inspecting drives,
                        motors, or belts, checking fluid levels, replacing
                        filters, or doing other preventive maintenance actions.
                      </li>
                      <li>
                        Maintain records of machine maintenance and repair.
                      </li>
                      <li>
                        Repair machines, equipment, or structures, using tools
                        such as hammers, drills, or wrenches.
                      </li>
                      <li>
                        Maintain records of machine maintenance and repair.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='job-item'>
                  <div className='job-item-title'>Minimum Requirements:</div>
                  <div className='job-item-content'>
                    <ul>
                      <li>
                        2-3 years prior experience as a maintenance and repair
                        worker.
                      </li>
                      <li>
                        Hands on experience with hand and electrical tools
                      </li>
                      <li>Strong communication skills.</li>
                      <li>
                        Ability to stand or walk for long periods of time and
                        lift at least 35 pounds.
                      </li>
                      <li>Must have reliable transportation to work.</li>
                    </ul>
                  </div>
                </div>
                <div className='job-item'>
                  <div className='job-item-title'>Note:</div>
                  <div className='job-item-content'>
                    <ul style={{ listStyle: 'none' }}>
                      <li>
                        While performing position duties, the team member will
                        be regularly required to: work days, nights, and/or
                        weekends; work in a noisy, fast-paced environment with
                        distracting conditions; move about the facility and
                        stand for long-periods of time; and lift and carry up to
                        35 lbs.
                      </li>{' '}
                      <br />
                      <li>
                        The physical demands described here are representative
                        of those that must be met by a team member to
                        successfully perform the essential functions of this
                        job. Reasonable accommodations may be made to enable
                        individuals with disabilities to perform essential job
                        functions.
                      </li>
                    </ul>
                  </div>
                  <div className='job-item-title'>EOE Statement:</div>
                  <div className='job-item-content'>
                    <ul style={{ listStyle: 'none' }}>
                      <li>
                        We are an equal employment opportunity employer. All
                        qualified applicants will receive consideration for
                        employment without regard to race, color, religion, sex,
                        national origin, disability status, protected veteran
                        status or any other characteristic protected by law.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              <Icon name='close' /> Close
            </Button>
            <a
              href='https://recruiting.myapps.paychex.com/appone/MainInfoReq.asp?R_ID=3005173'
              target='_blank'
              rel='noopener noreferrer'
              onClick={() => this.close()}
            >
              <Button color='green'>
                <Icon name='checkmark' /> Apply Now
              </Button>
            </a>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default Job2Modal;

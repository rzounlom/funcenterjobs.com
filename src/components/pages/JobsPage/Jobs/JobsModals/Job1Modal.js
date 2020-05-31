import React, { Component } from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';
import './JobsModal.scss';

class Job1Modal extends Component {
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
          <Modal.Header>Guest Services Manager</Modal.Header>
          <Modal.Content scrolling>
            <Modal.Description>
              <div className='job-description'>
                <div className='job-item'>
                  <div className='job-item-title'>Overview:</div>
                  <div className='job-item-content'>
                    <ul>
                      <li>
                        Assist the Chief Operating Officer in coordinating,
                        directing and planning everyday business operations.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='job-item'>
                  <div className='job-item-title'>General Description:</div>
                  <div className='job-item-content'>
                    <ul>
                      <li>
                        Ensure guests have a positive and memorable experience.
                      </li>
                      <li>
                        Develop training and train workers in proper operational
                        procedures and functions and explain company policies.
                      </li>
                      <li>
                        Ensure shifts run smoothly and manage daily operations.
                      </li>
                      <li>
                        Help create work schedules to ensure quality and timely
                        delivery of service and compliance with labor laws.
                      </li>
                      <li>
                        Assist on the front and back lines when necessary.
                      </li>
                      <li>Recruit and hire staff members.</li>
                    </ul>
                  </div>
                </div>
                <div className='job-item'>
                  <div className='job-item-title'>Minimum Requirements:</div>
                  <div className='job-item-content'>
                    <ul>
                      <li>
                        3 years of experience in teaching, coaching, mentoring,
                        training, or supervising.
                      </li>
                      <li>Strong organizational and leadership ability</li>
                      <li>Fast learner and coachable.</li>
                      <li>Strong communication and interpersonal skills.</li>
                      <li>
                        Ability to stand or walk for long periods of time and
                        lift at least 35 pounds.
                      </li>
                      <li>Must have reliable transportation to work.</li>
                      <li>Flexibility to work days, evenings, and weekends.</li>
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
              href='https://recruiting.myapps.paychex.com/appone/MainInfoReq.asp?R_ID=3005114'
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

export default Job1Modal;

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
          <Modal.Header>Attractions Manager</Modal.Header>
          <Modal.Content scrolling>
            <Modal.Description>
              <div className='job-description'>
                <div className='job-item'>
                  <div className='job-item-title'>General Description:</div>
                  <div className='job-item-content'>
                    <ul>
                      <li>
                        Assist the general manager in coordinating, directing,
                        and planning everyday business operations
                      </li>
                      <li>
                        Help create weekly schedules, ensure shifts run
                        smoothly, manage daily operations, and help with human
                        resources
                      </li>
                      <li>
                        Assist in the performance of administrative duties,
                        training new employees, and assist on the front and back
                        lines when necessary
                      </li>
                      <li>
                        Help lead team meetings and group training sessions
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='job-item'>
                  <div className='job-item-title'>Minimum Requirements:</div>
                  <div className='job-item-content'>
                    <ul>
                      <li>
                        Minimum of 3 years of experience in teaching, coaching,
                        mentoring, training, or supervising.
                      </li>
                      <li>Strong organizational and leadership ability</li>
                      <li>
                        Fast learner and coachable, with desirable interpersonal
                        skillssFast learner and coachable, with desirable
                        interpersonal skillss
                      </li>
                      <li>Flexibility to work days, evenings and weekends</li>
                    </ul>
                  </div>
                </div>
                <div className='job-item'>
                  <div className='job-item-title'>Important Note:</div>
                  <div className='job-item-content'>
                    <ul style={{ listStyle: 'none' }}>
                      <li>
                        The physical demands described here are representative
                        of those that must be met by a team member to
                        successfully perform the essential functions of this
                        job. Reasonable accommodations may be made to enable
                        individuals with disabilities to perform essential job
                        functions. While performing the duties of this position,
                        the team member will regularly be required to:
                        <ul className='inner-ul'>
                          <li>Work days, nights, and/or weekends</li>
                          <li>
                            Work in a noisy, fast-paced environment with
                            distracting conditions
                          </li>
                          <li>
                            Move about the facility and stand for long periods
                            of time
                          </li>
                          <li>Read and write handwritten notes</li>
                          <li>Lift and carry up to 30 LBS</li>
                        </ul>
                      </li>
                    </ul>
                    <ul style={{ listStyle: 'none' }}>
                      <li>
                        The above statements are intended to describe the
                        general nature and level of work being performed by
                        individuals assigned to this job. They are not intended
                        to be an exhaustive list of all responsibilities,
                        duties, and skills.
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
              href='mailto:rzounlom@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              onClick={() => this.close()}
            >
              <Button color='blue'>
                <Icon name='mail' /> Email Resume
              </Button>
            </a>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default Job2Modal;

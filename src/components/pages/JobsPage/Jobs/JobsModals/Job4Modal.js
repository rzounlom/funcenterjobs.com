import React, { Component } from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';

class Job4Modal extends Component {
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
          <Modal.Header>Executive Chef</Modal.Header>
          <Modal.Content scrolling>
            <Modal.Description>
              <div className='job-description'>
                <div className='job-item'>
                  <div className='job-item-title'>Overview:</div>
                  <div className='job-item-content'>
                    <ul>
                      <li>
                        Oversee all aspects of restaurant operation under the
                        direction of the General Manager
                      </li>
                      <li>
                        Ensure a desirable food and beverage experience for
                        customers by managing kitchen staff and servers,
                        beverage operations, food safety, and quality
                      </li>
                      <li>
                        Participate in general facility management as needed
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='job-item'>
                  <div className='job-item-title'>General Description:</div>
                  <div className='job-item-content'>
                    <ul>
                      <li>Keep Kitchen in good working order</li>
                      <li>
                        Ensure food quality, taste, and appearance are
                        consistent and desirable
                      </li>
                      <li>Host group events as needed (training provided)</li>
                      <li>
                        Assist in recruiting and training promotable food and
                        beverage team members
                      </li>
                      <li>
                        Complete administrative duties in managing inventory
                        levels, staffing numbers, kitchen maintenance, and
                        operations
                      </li>
                      <li>
                        Oversee catering services for large groups and events
                      </li>
                      <li>Serve on Event Management Team</li>
                      <li>
                        Assist in daily operation of overall facility as part of
                        the senior management team
                      </li>
                      <li>Be a good coach and be coachable</li>
                    </ul>
                  </div>
                </div>
                <div className='job-item'>
                  <div className='job-item-title'>Minimum Requirements:</div>
                  <div className='job-item-content'>
                    <ul>
                      <li>
                        2-3 years of experience or training in the food service
                        industry
                      </li>
                      <li>
                        Strong communication skills, ability to multitask,
                        leadership abilities, computer literacy
                      </li>
                      <li>Strong work ethic and a “go-getter” attitude</li>
                      <li>
                        Ability to travel for training and professional
                        development
                      </li>
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

export default Job4Modal;

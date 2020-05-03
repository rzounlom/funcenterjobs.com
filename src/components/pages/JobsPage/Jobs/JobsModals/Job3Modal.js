import React, { Component } from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';

class Job3Modal extends Component {
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
          <Modal.Header>Group and Corporate Sales Manager</Modal.Header>
          <Modal.Content scrolling>
            <Modal.Description>
              <div className='job-description'>
                <div className='job-item'>
                  <div className='job-item-title'>Overview:</div>
                  <div className='job-item-content'>
                    <ul>
                      <li>
                        Engage with prospective clients to book group events,
                        including company parties, team building, youth, church,
                        and school groups.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='job-item'>
                  <div className='job-item-title'>General Description:</div>
                  <div className='job-item-content'>
                    <ul>
                      <li>
                        Become a product expert on fundraising events, corporate
                        events/team-building, birthday parties, adult parties,
                        field trips, charity events, and other events that will
                        attract groups
                      </li>
                      <li>
                        Attend local business and other community events to
                        promote the center
                      </li>
                      <li>Host group events as needed (training provided)</li>
                      <li>
                        Book group events, ensuring guest satisfaction and
                        revenue goals are met or exceeded
                      </li>
                      <li>Assist in the development of our sales team</li>
                    </ul>
                  </div>
                </div>
                <div className='job-item'>
                  <div className='job-item-title'>Minimum Requirements:</div>
                  <div className='job-item-content'>
                    <ul>
                      <li>Exceptional communication and presentation skills</li>
                      <li>
                        Ability to identity leads and cold call on prospective
                        guests
                      </li>
                      <li>
                        1-2 years of outside sales training or sales experience
                        in any industry
                      </li>
                      <li>
                        Ability to travel for training and professional
                        development
                      </li>
                      <li>Reliable transportation and a good driving record</li>
                      <li>
                        Ability to participate in events on evenings and
                        weekends
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

export default Job3Modal;

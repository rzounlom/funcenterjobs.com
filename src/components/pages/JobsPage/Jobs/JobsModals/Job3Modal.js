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
          <Modal.Header>Sales & Event Manager </Modal.Header>
          <Modal.Content scrolling>
            <Modal.Description>
              <div className='job-description'>
                <div className='job-item'>
                  <div className='job-item-title'>Overview:</div>
                  <div className='job-item-content'>
                    <ul>
                      <li>
                        Engage with propective clients to book group events,
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
                        attract groups.
                      </li>
                      <li>
                        Attend local business and other community events to
                        promote the center.
                      </li>
                      <li>Host group events as needed (training provided)</li>
                      <li>
                        Book group events, ensuring guest satisfaction and
                        revenue goals are met or exceeded.
                      </li>
                      <li>Assist in development of our sales team.</li>
                    </ul>
                  </div>
                </div>
                <div className='job-item'>
                  <div className='job-item-title'>Minimum Requirements:</div>
                  <div className='job-item-content'>
                    <ul>
                      <li>
                        1-2 years of outsides sales training or sales experience
                        in any industry.
                      </li>
                      <li>
                        Exceptional communication and presentation skills.
                      </li>
                      <li>
                        Ability to identify leads and cold call on prospective
                        guests.
                      </li>
                      <li>
                        Ability to travel for training and professional
                        development.
                      </li>
                      <li>
                        Reliable transportations and a good driving record.
                      </li>
                      <li>
                        Ability to participate in events on evenings and
                        weekends.
                      </li>
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
              href='https://recruiting.myapps.paychex.com/appone/MainInfoReq.asp?R_ID=3005191'
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

export default Job3Modal;

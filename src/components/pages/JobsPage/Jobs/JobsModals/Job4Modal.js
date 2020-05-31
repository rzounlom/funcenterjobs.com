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
                        direction of the General Manager.
                      </li>
                      <li>
                        Ensure a desirable food and beverage experience for
                        guest by managing kitchen staff and servers, beverage
                        operations, food safety, and quality.
                      </li>
                      <li>
                        Participate in general facility management, as needed.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='job-item'>
                  <div className='job-item-title'>General Description:</div>
                  <div className='job-item-content'>
                    <ul>
                      <li>Keeping kitchen in good working order.</li>
                      <li>
                        Ensuring food quality, taste and appearance are
                        consistent and desirable.
                      </li>
                      <li>
                        Hosting group events as needed (training provided).
                      </li>
                      <li>
                        Assist in recruiting and training promotable food and
                        beverage team members.
                      </li>
                      <li>
                        Complete administrative duties in managing inventory
                        levels, staffing numbers, kitchen maintenance, and
                        operations.
                      </li>
                      <li>
                        Oversee catering services for large groups and events.
                      </li>
                      <li>Serve on Event Management Team.</li>
                      <li>
                        Assist in daily operation of overall facility as part of
                        the senior management team.
                      </li>
                      <li>Be a good coach and be coachable.</li>
                    </ul>
                  </div>
                </div>
                <div className='job-item'>
                  <div className='job-item-title'>Minimum Requirements:</div>
                  <div className='job-item-content'>
                    <ul>
                      <li>Keeping kitchen in good working order.</li>
                      <li>Be a good coach and be coachable.</li>
                      <li>
                        Willingness to cross-train in kitchen and attraction
                        areas.
                      </li>
                      <li>Strong leadership and communication skills.</li>
                      <li>Ability to multitask.</li>
                      <li>Strong work ethic and a “go-getter” attitude.</li>
                      <li>Exceptional time management skills.</li>
                      <li>
                        Ability to stand or move about for long periods of time
                        and lift at least 30 pounds.
                      </li>
                      <li>Must have reliable transportation to work.</li>
                      <li>
                        Willingness to comply with all food safety procedures.
                      </li>
                      <li>
                        Ability to travel for training and professional
                        development.
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
              href='https://recruiting.myapps.paychex.com/appone/MainInfoReq.asp?R_ID=3003200'
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

export default Job4Modal;

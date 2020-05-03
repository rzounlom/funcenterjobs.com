import React from 'react';
import { ButtonToolbar, Drawer } from 'rsuite';
import './NavToggle.scss';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.close = this.close.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  close() {
    this.setState({
      show: false,
    });
  }
  toggleDrawer() {
    this.setState({ show: true });
  }
  render() {
    return (
      <div className='NavToggle'>
        <ButtonToolbar>
          <Icon name='bars' size='large' onClick={this.toggleDrawer} />
        </ButtonToolbar>
        <Drawer show={this.state.show} onHide={this.close} size='small'>
          <Drawer.Body>
            <ul className='drawer-body-menu' onClick={this.close}>
              <Link to='/'>
                <li className='drawer-body-item'>
                  <div className='menu-item-conainer'>
                    <Icon
                      className='menu-icon'
                      name='info circle'
                      size='large'
                    />
                    <span className='about'>About</span>
                  </div>
                </li>
              </Link>
              <Link to='/jobs'>
                <li className='drawer-body-item'>
                  <div className='menu-item-conainer'>
                    <Icon className='menu-icon' name='suitcase' size='large' />
                    <span className='jobs'>Jobs</span>
                  </div>
                </li>
              </Link>
              <a
                href='mailto:rzounlom@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <li className='drawer-body-item'>
                  <div className='menu-item-conainer'>
                    <Icon className='menu-icon' name='mail' size='large' />
                    <span className='contact'>Contact</span>
                  </div>
                </li>
              </a>
              <a
                href='https://www.google.com/maps/place/1018+W+Edison+Rd,+Mishawaka,+IN+46545/@41.694734,-86.1981197,17z/data=!3m1!4b1!4m5!3m4!1s0x8816cd8b31e76335:0xcdabd144e62763e6!8m2!3d41.694734!4d-86.195931'
                target='_blank'
                rel='noopener noreferrer'
              >
                <li className='drawer-body-item'>
                  <div className='menu-item-conainer'>
                    <Icon
                      className='menu-icon location'
                      name='location arrow'
                      size='large'
                    />
                    <span className='location'>Location</span>
                  </div>
                </li>
              </a>
            </ul>
          </Drawer.Body>
        </Drawer>
      </div>
    );
  }
}

export default NavToggle;

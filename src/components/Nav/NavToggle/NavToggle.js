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
                href='mailto:JackV@generations-adventureplex.com'
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
            </ul>
          </Drawer.Body>
        </Drawer>
      </div>
    );
  }
}

export default NavToggle;

import React, { Component } from 'react';
import './Landing.scss';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { Player } from 'video-react';
import VideoPoster from './video_poster.png';
import LandingVideo from './landing_video.mp4';

class Landing extends Component {
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
      <div data-aos='fade-down' className='Landing'>
        <Player
          playsInline
          poster={VideoPoster}
          src={LandingVideo}
          className='landing-video-player'
        />
        {/* <div className='landing-btn-container'> */}
        {/* <Link to='/jobs' color='blue' className='landing-btn'>
            EXPLORE ROLES
          </Link>
        </div> */}
      </div>
    );
  }
}

export default Landing;

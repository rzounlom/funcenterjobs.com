import "./Landing.scss";

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import React, { Component } from "react";

import AOS from "aos";
import logo from "../../../../generations-logo-trans.png";

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
      <div data-aos="fade-down" className="Landing">
        <div className="landing-header">
          <div className="logo-continer">
            <img src={logo} alt="logo" />
          </div>
          <div className="social-continer">
            <div className="icon-container">
              <BsFacebook color="white" />
            </div>
            <div className="icon-container">
              <BsTwitter color="white" />
            </div>
            <div className="icon-container">
              <BsInstagram color="white" />
            </div>
          </div>
        </div>
        <div className="landing-body">
          <div className="heading-container">
            <div className="heading">Become a member of a winning team</div>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

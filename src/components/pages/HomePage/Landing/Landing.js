import "./Landing.scss";

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
          <div className="social-continer">Social Container</div>
        </div>
        <div className="landing-body">
          <button>Learn More</button>
        </div>
      </div>
    );
  }
}

export default Landing;

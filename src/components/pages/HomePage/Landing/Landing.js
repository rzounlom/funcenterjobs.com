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
            <a href="https://generations-adventureplex.com/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="social-continer">
            <a
              className="icon-container"
              href="https://www.facebook.com/GenerationsAdventurePlex"
            >
              <BsFacebook color="white" />
            </a>
            <a
              className="icon-container"
              href="https://twitter.com/gadventureplex"
            >
              <BsTwitter color="white" />
            </a>
            <a
              className="icon-container"
              href="https://www.instagram.com/generations_adventureplex/"
            >
              <BsInstagram color="white" />
            </a>
          </div>
        </div>
        <div className="landing-body">
          <div className="heading-container">
            <div className="heading">Join a winning team</div>
            <a href="https://generations-adventureplex.com/jobs/">
              <button>Learn More</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

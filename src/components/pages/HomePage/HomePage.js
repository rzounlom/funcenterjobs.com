import "./HomePage.scss";

import About from "./About/About";
import Landing from "./Landing/Landing";
import React from "react";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Landing />
      {/* <About /> */}
    </div>
  );
};

export default HomePage;

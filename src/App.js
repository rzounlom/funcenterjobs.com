import "./App.scss";
import "rsuite/dist/styles/rsuite-default.css";

import { Route, Switch } from "react-router-dom";

import Footer from "./components/pages/HomePage/Footer/Footer";
import HomePage from "./components/pages/HomePage/HomePage";
import JobsPage from "./components/pages/JobsPage/JobsPage";
import Nav from "./components/Nav/Nav";
import React from "react";

const App = () => {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route path="/">
            <HomePage className="App-page" />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import 'rsuite/dist/styles/rsuite-default.css';
import Nav from './components/Nav/Nav';
import HomePage from './components/pages/HomePage/HomePage';
import JobsPage from './components/pages/JobsPage/JobsPage';


const App = () => {
  return (
    <div className='App'>
      <Nav />
      <div className='a       +'>
        <Switch>
          <Route path='/jobs'>
            <JobsPage className='App-page' />
          </Route>
          <Route path='/'>
            <HomePage className='App-page' />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

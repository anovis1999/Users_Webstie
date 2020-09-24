import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import AddMailGroup from './components/AddMailGroup';

import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import BuildTree from './containers/BuildTree';



function App() {
  return (
<Router basename="/">
  <Navbar></Navbar>
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
              <Route exact path="/" component={SignInForm}>
              </Route>
              <Route path="/sign-up" component={SignUpForm}>
              </Route>
              <Route path="/mail" component={AddMailGroup}>
              </Route>
              <Route path="/mailtree" component={BuildTree}>
              </Route>
          </div>

        </div>
      </Router>
  );
}

export default App;

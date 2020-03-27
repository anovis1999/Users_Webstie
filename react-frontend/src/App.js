import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';



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
          </div>

        </div>
      </Router>
  );
}

export default App;

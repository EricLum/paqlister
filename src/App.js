import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import Landing from './containers/Landing'
import LandingCards from './components/LandingCards'
import UserManifestsContainer from './containers/UserManifestsContainer'
import {Row, Col, Card,Icon} from 'react-materialize'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Navigation />
      <Landing />
      <LandingCards />
    </div>
  )
}

const MyManifests = () => {
  return (
    <div>
      <UserManifestsContainer />
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            {/* <Route path='/' render={Home}/> */}
            {/* login, signup, my packlists */}
            <Route path='/collections' render={MyManifests} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

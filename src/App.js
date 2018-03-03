import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import Landing from './containers/Landing'
import LandingCards from './components/LandingCards'
import UserManifestsContainer from './containers/UserManifestsContainer'
import ManifestContainer from './containers/ManifestContainer'
import Signup from './containers/Signup'
import {Row, Col, Card, Icon, Parallax} from 'react-materialize'
import BasicLayout from './BasicLayout'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Navigation />
      <Landing />
      <LandingCards />
    </div>
  )
}

const test = () => {
  return (
    <div>
      <BasicLayout />

    </div>
  )
}

const signup = () => {
  console.log('routing to signup')
  return (
    <div>
    <Navigation />
    <Signup />
  </div>
  )
}

const login = () => {
  return (
    <div>
      <Navigation />
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/test' render={test} />
            <Route path='/signup' render={signup} />
            <Route path='/login' render={login} />
            <Route path='/manifests' component={ManifestContainer} />
            <Route exact path='/' render={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Landing from './containers/Landing'
import LandingCards from './components/LandingCards'
import ManifestContainer from './containers/ManifestContainer'
import Signup from './containers/Signup'
import Login from './containers/Login'
import BasicLayout from './BasicLayout'
import {connect} from 'react-redux'
import { userLoggedIn } from './actions/actions'
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
      <Login />
    </div>
  )
}

const manifests = () => {
  return (
    <div>
      <Navigation />
      <ManifestContainer />
    </div>
  )
}

class App extends Component {

  componentDidMount(){
    // see if there's a token, set in state if there is
    this.props.userLoggedIn()
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/test' render={test} />
            <Route path='/signup' render={signup} />
            <Route path='/login' render={login} />
            <Route path='/manifests' render={manifests} />
            <Route exact path='/' render={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state.manifestsReducer}
}

export default connect(mapStateToProps,{userLoggedIn})(App);

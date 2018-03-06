import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Landing from './containers/Landing'
import LandingCards from './components/LandingCards'
import ManifestContainer from './containers/ManifestContainer'
import UserManifestsContainer from './containers/UserManifestsContainer'
import Signup from './containers/Signup'
import Login from './containers/Login'
import BasicLayout from './BasicLayout'
import {connect} from 'react-redux'
import { userLoggedIn } from './actions/actions'
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom'

const Home = () => {
  return (
    <div>
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
  return (
    <div>

    <Signup />
  </div>
  )
}

const login = () => {
  return (
    <div>

      <Login />
    </div>
  )
}

const manifests = () => {
  return (
    <div>
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
          <Navigation />
          <Switch>
            <Route path='/test' render={test} />
            <Route path='/signup' render={signup} />
            <Route path='/login' render={login} />
            <Route exact path='/manifests' render={manifests} />
            <Route path={`/manifests/:manifestId`} component={UserManifestsContainer}/>
            <Route exact path='/' render={Home}/>
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state.manifestsReducer}
}

export default withRouter(connect(mapStateToProps,{userLoggedIn})(App));

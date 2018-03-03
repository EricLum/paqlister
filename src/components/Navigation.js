import React from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import {connect} from 'react-redux'

class Navigation extends React.Component {
  render(){
    if (this.props.user.username){

    }
    return (

          <div className="Navigation">
            <Navbar className='grey darken-4' brand='Menagerie'>
              {!this.props.user.username &&
                <div>
                <Link to='/login'>
                  <NavItem>Login</NavItem>
                </Link>
                <Link to='/signup'>
                  <NavItem>Sign Up</NavItem>
                </Link>

                </div>
              }
              {this.props.user.username &&
                <div>
                <NavItem> {this.props.user.username} is logged in </NavItem>
                <Link to='/'>
                  <NavItem>Signout</NavItem>
                </Link>
                <Link to='/manifests'>
                  <NavItem><Icon>view_module</Icon></NavItem>
                </Link>
              </div>
              }
            </Navbar>
          </div>

      )
  }
}
// <Router>
//   <Switch >
{/* <Route path='/login'></Route>
<Route path='/signup' ></Route>
<Route path='/manifests'></Route>
</Switch>

</Router> */}

let mapStateToProps = (state) => {
  return {
    user: state.manifestsReducer.user
  }
}

export default connect(mapStateToProps,)(Navigation)

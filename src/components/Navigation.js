import React from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize'
import { Link } from 'react-router-dom'
import {logoutUser} from '../actions/actions'
import {connect} from 'react-redux'

class Navigation extends React.Component {

  handleLogOut = () => {
    this.props.logoutUser()
  }

  render(){
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
                <Link to ='/'>
                  <NavItem onClick={this.handleLogOut}>Logout</NavItem>
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

let mapStateToProps = (state) => {
  return {
    user: state.manifestsReducer.user
  }
}

export default connect(mapStateToProps,{logoutUser})(Navigation)

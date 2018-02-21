import React from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize'
// import './Navigation.css'

class Navigation extends React.Component {
  render(){
    return (
      <div className="Navigation">
        <Navbar className="black" brand='Paqlist'>
          <NavItem>Login</NavItem>
          <NavItem>Sign Up</NavItem>
          <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
        	<NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
        	<NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
        	<NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
        </Navbar>
      </div>
      )
  }
}

export default Navigation

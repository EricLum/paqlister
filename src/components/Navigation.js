import React from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize'


class Navigation extends React.Component {
  render(){
    return (
      <div className="Navigation">
        <Navbar className="black" brand='Menagerie'>
          <NavItem>Login</NavItem>
          <NavItem>Sign Up</NavItem>
          {/* <NavItem href='/'><Icon>search</Icon></NavItem> */}
        	<NavItem href='/mycollections'><Icon>view_module</Icon></NavItem>
        	{/* <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem> */}
        	<NavItem href='/collections'><Icon>more_vert</Icon></NavItem>
        </Navbar>
      </div>
      )
  }
}

export default Navigation

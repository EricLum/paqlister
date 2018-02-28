import React from 'react'
import {SideNav, SideNavItem, Button} from 'react-materialize'
import { Link } from 'react-router-dom'

class UserManifestsNavbar extends React.Component {
  render (){
    return(
      <SideNav
  	trigger={<Button>Show Menu</Button>}>
  	<SideNavItem userView
  		user={{
  			background: 'img/office.jpg',
  			image: 'img/yuna.jpg',
  			name: 'John Doe',
  			email: 'jdandturk@gmail.com'
  		}}
  	/>
    <SideNavItem divider />
    <Link to={'/manifests'}>
      <SideNavItem>Back to collections</SideNavItem>
    </Link>

  	{/* <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
  	<SideNavItem href='#!second'>Second Link</SideNavItem>
  	<SideNavItem divider />
  	<SideNavItem subheader>Subheader</SideNavItem>
  	<SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem> */}
  </SideNav>
    )
  }
}

export default UserManifestsNavbar

import React from 'react'
import {SideNav, SideNavItem, Button} from 'react-materialize'
import { Link } from 'react-router-dom'

class UserManifestsNavbar extends React.Component {
  render (){
    return(
      <SideNav
  	trigger={<Button className='red darken-1'>Show Menu</Button>}>
  	<SideNavItem userView
  		user={{
  			background: 'img/office.jpg',
  			image: 'img/yuna.jpg',
  			name: 'John Doe',
  			email: 'jdandturk@gmail.com'
  		}}
  	/>
    <SideNavItem divider />
    <Link to='/manifests'>
      <SideNavItem>Back to collections</SideNavItem>
    </Link>

  </SideNav>
    )
  }
}

export default UserManifestsNavbar

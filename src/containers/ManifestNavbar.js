import React from 'react'
import {SideNav, SideNavItem, Button} from 'react-materialize'

class ManifestNavbar extends React.Component {



  render (){
    return( <SideNav
      	trigger={<Button className='red darken-1'>Show Menu</Button>}>
      	<SideNavItem userView
      		user={{
      			background: 'img/office.jpg',
      			image: 'img/yuna.jpg',
      			name: 'John Doe',
      			email: 'jdandturk@gmail.com'
      		}}
      	/>
      	<SideNavItem href='/' icon='cloud'>Home</SideNavItem>
      	<SideNavItem divider />
      </SideNav>)
  }
}

export default ManifestNavbar

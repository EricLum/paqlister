import React from 'react'
import {SideNav, SideNavItem, Button} from 'react-materialize'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
class ManifestNavbar extends React.Component {

  render (){
    return(
        <SideNav
          trigger={<Button className='red darken-1'>Show Menu</Button>}>
          <SideNavItem userView
            user={{
              background: 'img/office.jpg',
              image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
              name: this.props.user.username,
              email: 'jdandturk@gmail.com'
            }}
          />
          <Link to='/'>
            <SideNavItem icon='cloud'>Home</SideNavItem>
          </Link>
          <SideNavItem divider />
        </SideNav>
    )
  }
}

let mapStateToProps = (state) => {
  return {user: state.manifestsReducer.user}
}

export default connect(mapStateToProps)(ManifestNavbar)

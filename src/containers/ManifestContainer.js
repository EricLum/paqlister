import React from 'react'
import {SideNav, Button, SideNavItem} from 'react-materialize'
import ManifestNavbar from './ManifestNavbar'
import '../styles/ManifestContainer.css'
import ManifestContainerItem from './ManifestContainerItem'
import {Connect }

class ManifestContainer extends React.Component {

  handleOnSave = (event) => {
    event.preventDefault()


    // when saving, use props.reducer thing to set a global state.
  }

  render(){
    return (
      <div>
        <ManifestNavbar />
        <div className='collectionsGrid'>
          <ManifestContainerItem />
          <ManifestContainerItem />
          <ManifestContainerItem />
        </div>
      </div>
    )
  }
}

export default ManifestContainer

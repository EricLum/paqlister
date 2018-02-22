import React from 'react'
import {SideNav, Button, SideNavItem} from 'react-materialize'
import ManifestNavbar from './ManifestNavbar'
import '../styles/ManifestContainer.css'

class ManifestContainer extends React.Component {

  render(){
    return (
      <div>
        <ManifestNavbar />
        <div className='collectionsGrid'>
          <div className='cool'>
            hi
          </div>
          <div className='cool'>
            hi
          </div>
          <div className='cool'>
            hi
          </div>
          <div className='cool'>
            hi
          </div>
          <div className='cool'>
            hi
          </div>
        </div>
      </div>
    )
  }
}

export default ManifestContainer

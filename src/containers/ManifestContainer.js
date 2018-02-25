import React from 'react'
import {SideNav, Button, SideNavItem} from 'react-materialize'
import ManifestNavbar from './ManifestNavbar'
import '../styles/ManifestContainer.css'
import ManifestContainerItem from './ManifestContainerItem'
import { connect } from 'react-redux'
import { saveCollections} from '../actions/actions'
import {bindActionCreators} from 'redux'

class ManifestContainer extends React.Component {

  handleOnSave = (event) => {
    console.log('hitting save')
    event.preventDefault()
    this.props.saveCollections()
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
          <button onClick={this.handleOnSave} >hi</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveCollections
  }, dispatch)
}

export default connect(null,mapDispatchToProps)(ManifestContainer)

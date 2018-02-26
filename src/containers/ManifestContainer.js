import React from 'react'
import {SideNav, Button, SideNavItem} from 'react-materialize'
import ManifestNavbar from './ManifestNavbar'
import '../styles/ManifestContainer.css'
import ManifestContainerItem from './ManifestContainerItem'
import { connect } from 'react-redux'
import { manifestPostData, getManifestData} from '../actions/actions'
import {bindActionCreators} from 'redux'

class ManifestContainer extends React.Component {

  handleOnSave = (event) => {
    let item = {title: 'sample title', limit: 20, description: 'test', user_id: 10}
    event.preventDefault()
    this.props.manifestPostData('http://localhost:3001/api/v1/manifests',item)
  }

  componentDidMount(){
    let loadedItems = this.props.getManifestData('http://localhost:3001/api/v1/manifests')
  }

  render(){
    let manifestContainers = this.props.manifests.map( (manifest) => <ManifestContainerItem key={manifest.id} name={manifest.title} limit={manifest.limit} description={manifest.description} user={manifest.user} />)
    return (
      <div>
        <ManifestNavbar />
        <div className='collectionsGrid'>
          {manifestContainers}
          <form onSubmit={this.handleOnSave}>
            <label>Create a new container item</label>
            <input type='text' placeholder='Title'></input>
            <input type='text' placeholder='limit'></input>
            <input type='text' placeholder='description'></input>
            <input type='submit' placeholder='submit'></input>
          </form>
        </div>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     manifestPostData,
//     getManifestData
//   }, dispatch)
// }

const mapStateToProps = ({manifestsReducer}) => {
  return {...manifestsReducer}
}

export default connect( ({manifestsReducer}) =>({...manifestsReducer}),{ manifestPostData, getManifestData} )(ManifestContainer)

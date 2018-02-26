import React from 'react'
import {SideNav, Button, SideNavItem} from 'react-materialize'
import ManifestNavbar from './ManifestNavbar'
import '../styles/ManifestContainer.css'
import ManifestContainerItem from './ManifestContainerItem'
import { connect } from 'react-redux'
import { manifestPostData, getManifestData} from '../actions/actions'
import {bindActionCreators} from 'redux'

class ManifestContainer extends React.Component {

  state = {
    title: '',
    limit: '',
    description: '',
    user_id: 10
  }

  handleOnChange = (e) => {
    console.log(this.state)
    this.state[e.target.name] = e.target.value
  }

  handleOnSave = (event) => {
    event.preventDefault()
    this.props.manifestPostData('http://localhost:3001/api/v1/manifests', this.state)
  }

  componentDidMount(){
   this.props.getManifestData('http://localhost:3001/api/v1/manifests')
  }

  render(){

    let manifestContainers = this.props.manifests.map( (manifest) => <ManifestContainerItem key={manifest.id} unique_id={manifest.id} title={manifest.title} limit={manifest.limit} description={manifest.description} user={manifest.user_id} />)

    return (
      <div>
        <ManifestNavbar />
        <div className='collectionsGrid'>
          {manifestContainers}
          <form onSubmit={this.handleOnSave}>
            <label>Create a new container item</label>
            <input name='title' type='text' onChange={this.handleOnChange} placeholder='Title'></input>
            <input name='limit' type='text' onChange={this.handleOnChange} placeholder='Limit'></input>
            <input name='description' type='text' onChange={this.handleOnChange} placeholder='description'></input>
            <input type='text' value='10' name='user_id' placeholder='user_id'></input>
            <input type='submit' name='submit' placeholder='submit'></input>
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

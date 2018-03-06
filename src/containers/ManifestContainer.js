import React from 'react'
import { Button} from 'react-materialize'
import {Route, Switch, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { manifestPostData, getManifestData} from '../actions/actions'
import ManifestNavbar from './ManifestNavbar'
import ManifestContainerItem from './ManifestContainerItem'
import UserManifestsContainer from './UserManifestsContainer'
import '../styles/ManifestContainer.css'

class ManifestContainer extends React.Component {

  state = {
    title: '',
    limit: '',
    description: '',
    user_id: this.props.user.id
  }

  handleOnChange = (e) => {
    e.persist()
    this.setState((prevState) =>{
      return {...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  handleOnSave = (event) => {
    event.preventDefault()
    this.props.manifestPostData('http://localhost:3001/api/v1/manifests', this.state)
    this.setState({
      title: '',
      limit: '',
      description: '',
      user_id: this.props.user.id
    })
  }

  componentDidMount(){
   this.props.getManifestData('http://localhost:3001/api/v1/manifests')
  }

  render(){

    const manifestContainers = this.props.manifests.map( (manifest) =>
      <Link key={manifest.id} to={`/manifests/${manifest.id}`}>
        <ManifestContainerItem  unique_id={manifest.id} title={manifest.title} limit={manifest.limit} description={manifest.description} user={manifest.user_id} />
      </Link>
     )

    return (
      <div>
              {manifestContainers}
              <div className='input-field'>
                <form onSubmit={this.handleOnSave}>
                   <h4>Create a new manifest</h4>
                   <div className='input-field'>
                     <input name='title' id='title' type='text' onChange={this.handleOnChange}></input>
                     <label for='title'>Title</label>
                   </div>
                   <div className='input-field'>
                     <input name='limit' id='limit' type='text' onChange={this.handleOnChange}></input>
                     <label for='limit'>Limit</label>
                   </div>
                   <div className='input-field'>
                     <input name='description' id='description' type='text' onChange={this.handleOnChange}></input>
                     <label for='description'>Description</label>
                   </div>
        
                   <div className='input-field'>
                     <Button>
                       <input type='submit' id='submit' name='submit'></input>
                       <label for='submit'>Submit</label>
                     </Button>
                   </div>
                 </form>
              </div>
            </div>

    )
  }
}

export default connect( ({manifestsReducer}) =>({...manifestsReducer}),{ manifestPostData, getManifestData} )(ManifestContainer)

import React from 'react'
import {SideNav, Button, SideNavItem} from 'react-materialize'
import {Route, Switch, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { manifestPostData, getManifestData} from '../actions/actions'
import ManifestNavbar from './ManifestNavbar'
import ManifestContainerItem from './ManifestContainerItem'
import UserManifestsContainer from './UserManifestsContainer'
import '../styles/ManifestContainer.css'

class ManifestContainer extends React.Component {

  constructor(props){
    super(props)
  }

  state = {
    title: '',
    limit: '',
    description: '',
    user_id: 10
  }

  handleOnChange = (e) => {
    this.state[e.target.name] = e.target.value
  }

  handleOnSave = (event) => {
    event.preventDefault()
    this.props.manifestPostData('http://localhost:3001/api/v1/manifests', this.state)
    this.setState({
      title: '',
      limit: '',
      description: '',
      user_id: 10
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
        <ManifestNavbar />
            <Switch>
            <Route exact path='/manifests' render={ () => <div className='collectionsGrid'>
              {manifestContainers}
                <form onSubmit={this.handleOnSave}>
                   <label>Create a new container item</label>
                   <input name='title' type='text' onChange={this.handleOnChange} placeholder='Title'></input>
                   <input name='limit' type='text' onChange={this.handleOnChange} placeholder='Limit'></input>
                   <input name='description' type='text' onChange={this.handleOnChange} placeholder='description'></input>
                   <input type='text' value='10' name='user_id' placeholder='user_id'></input>
                   <input type='submit' name='submit' placeholder='submit'></input>
                 </form></div>} />
            <Route path={`/manifests/:manifestId`}
             component={UserManifestsContainer}/>
          </Switch>
        </div>
    )
  }
}

export default connect( ({manifestsReducer}) =>({...manifestsReducer}),{ manifestPostData, getManifestData} )(ManifestContainer)

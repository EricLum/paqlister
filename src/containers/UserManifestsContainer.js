//Container for showing all of the collections a user has or packs.
import React from 'react'
import UserManifestsNavbar from './UserManifestsNavbar'
import ItemWrapper from '../components/ItemWrapper'
import '../styles/UserManifestsContainer.css'
import {Button} from 'react-materialize'
import { connect } from 'react-redux'
import { loadManifestItems, loadManifestItemPositions} from '../actions/actions'

class UserManifestsContainer extends React.Component {

  componentDidMount(){
    console.log('mounted')
    //load all the initial items from state and their positions.
    this.props.loadManifestItems('http://localhost:3001/api/v1/manifests/getItems', this.props.match.params.manifestId)
    this.props.loadManifestItemPositions('http://localhost:3001/api/v1/manifestitems/getManifestItemsPositions', this.props.match.params.manifestId)
  }

  handleOnSave = (e) => {

  }

  render(){
    console.log(this.props)
    let items = this.props.items.map( (item) => <ItemWrapper key={item.id} item={item} />)

    return (
      <div>
        <div className="parentContainer">
          <UserManifestsNavbar />
          <div>
             <div style={{height: '750px', width: '1100px', padding: '10px'}}>
               {items}
             </div>
           </div>
           <div className='buttonsContainer'>
             <div className='buttonsRow'>
               <Button className='controlButton saveButton'>Save</Button>
               <Button className='controlButton shareButton'>Share</Button>
               <Button className='controlButton resetButton'>Reset</Button>
             </div>
          </div>
          </div>
      </div>

    )
  }
}

let mapStateToProps = (state) => {
  return {items: state.manifestsReducer.items,
          manifestItems: state.manifestsReducer.manifestItems
  }
}

export default connect(mapStateToProps ,{loadManifestItems, loadManifestItemPositions})(UserManifestsContainer)

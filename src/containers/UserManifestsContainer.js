//Container for showing all of the collections a user has or packs.
import React from 'react'
import UserManifestsNavbar from './UserManifestsNavbar'
import ItemWrapper from '../components/ItemWrapper'
import '../styles/UserManifestsContainer.css'
import {Button} from 'react-materialize'
import { connect } from 'react-redux'

class UserManifestsContainer extends React.Component {

  render(){
    console.log('look im here')
    let item = <ItemWrapper />
    return (
      <div>
        hi
        <div className="parentContainer">
          <UserManifestsNavbar />
          <div>
             <div style={{height: '750px', width: '1100px', padding: '10px'}}>
               {item}
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

const mapStateToProps = (state, ownProps) => {
  //get all the items
//   const items = state.items.find(items => item.id == ownProps.match.params.itemId)
// if (item) {
//   return {item}
// } else {
//   return {movie: {}}
// }
}

export default connect()(UserManifestsContainer)

//Container for showing all of the collections a user has or packs.
import React from 'react'
import UserManifestsNavbar from './UserManifestsNavbar'
import Draggable from 'react-draggable'
import '../styles/UserManifestsContainer.css'
class UserManifestsContainer extends React.Component {

  render(){
    console.log(this.state)
    return (
      <div>
        <UserManifestsNavbar />

        <div className="box" style={{height: '800px', width: '1200px', position: 'relative' , padding: '0'}}>
           <div style={{height: '750px', width: '1100px', padding: '10px'}}>
             <Draggable bounds="parent">
               <div className="box">
                 I can only be moved within my offsetParent.<br /><br />
                 Both parent padding and child margin work properly.
               </div>
             </Draggable>
             <Draggable bounds="parent">
               <div className="box">
                 I also can only be moved within my offsetParent.<br /><br />
                 Both parent padding and child margin work properly.
               </div>
             </Draggable>
           </div>
         </div>

      </div>
    )
  }
}

export default UserManifestsContainer

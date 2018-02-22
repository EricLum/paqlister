import React from 'react'
import '../styles/ItemWrapper.css'
import Draggable from 'react-draggable'
class ItemWrapper extends React.Component {

  state = {
    x: 0,
    y: 0
  }

  handleDrag = (e,ui) => {
    this.setState({
      x: ui.x,
      y: ui.y
    })
  }

  render (){
    return(
       <Draggable onDrag={this.handleDrag} bounds="parent" defaultPosition={{x: this.state.x, y:this.state.y}}>
         <div className="box">
           I can only be moved within my offsetParent.<br /><br />
           Both parent padding and child margin work properly.
         </div>
      </Draggable>)
  }
}

export default ItemWrapper

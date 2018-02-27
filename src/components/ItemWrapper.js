import React from 'react'
import '../styles/ItemWrapper.css'
import Draggable from 'react-draggable'
import { bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addItem} from '../actions/actions'
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
           {this.props.item.name}
         </div>
      </Draggable>)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addItem
  }, dispatch)
}

export default connect(null,)(ItemWrapper)

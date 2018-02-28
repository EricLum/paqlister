import React from 'react'
import '../styles/ItemWrapper.css'
import Draggable from 'react-draggable'
import { bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {saveManifestItemPosition} from '../actions/actions'
const BASE_URL = 'http://localhost:3001/api/v1/manifest_items/'
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

  componentWillMount(){
    if (this.props.positions[0]){
      this.setState({
        x: this.props.positions[0].left_position,
        y: this.props.positions[0].top_position
      })
    }
  }

  handleMouseUp = (e,ui) => {
    this.props.saveManifestItemPosition(`${BASE_URL}${this.props.item.id}`, this.props.manifestId,this.props.item.id,this.state.x, this.state.y)
  }

  render (){
    return(
       <Draggable onDrag={this.handleDrag} onStop={this.handleMouseUp} bounds="parent" position={{x: this.state.x, y:this.state.y}}>
         <div className="box">
           {this.props.item.name}
         </div>
      </Draggable>)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveManifestItemPosition
  }, dispatch)
}


export default connect(null, mapDispatchToProps)(ItemWrapper)

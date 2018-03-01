import React from 'react'
import '../styles/ItemWrapper.css'
import Draggable from 'react-draggable'
import { Button } from 'react-materialize'
import { bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {saveManifestItemPosition} from '../actions/actions'
import PropTypes from 'prop-types'
const BASE_URL = 'http://localhost:3001/api/v1/manifest_items/'


class ItemWrapper extends React.Component {

  state = {
    x: 0,
    y: 0,
    class: ''
  }

  handleDrag = (e,ui) => {
    this.setState({
      x: ui.x,
      y: ui.y
    })
  }

  componentDidMount(){
    if (this.props.positions[0]){
      this.setState({
        x: this.props.positions[0].left_position,
        y: this.props.positions[0].top_position
      }, this.forceUpdate())
    }

  }

  componentWillReceiveProps(nextProps){
    if (nextProps && this.props.positions[0]){
      this.setState({
        x: this.props.positions[0].left_position,
        y: this.props.positions[0].top_position
      }, this.forceUpdate())
    }

  }

  handleMouseUp = (e,ui) => {
    this.props.saveManifestItemPosition(`${BASE_URL}${this.props.item.id}`, this.props.manifestId,this.props.item.id,this.state.x, this.state.y)
  }

  handleSpin = (e) => {
    this.setState({
      ...this.state,
      class: 'box'
    })
  }

  render (){
    console.log(this.props.item.image)
    if(this.props.partyMode){
      return(
         <Draggable onDrag={this.handleDrag} onStop={this.handleMouseUp} bounds="parent"  position={{x: this.state.x, y: this.state.y}}>
           <div className='box partyMode'>
             <img className='no-drag' src={this.props.item.image} height='200px' width='200px'/>
             ItemName: {this.props.item.name} <br></br>
             ItemID: {this.props.item.id}<br></br>
             ManifestID: {this.props.manifestId}<br></br>
             Price: {this.props.item.price} <br></br>
           </div>
        </Draggable>)
      }
    return(
       <Draggable onDrag={this.handleDrag} onStop={this.handleMouseUp} bounds="parent"  position={{x: this.state.x, y: this.state.y}}>
         <div className='box'>
           <img className='no-drag' src={this.props.item.image} height='200px' width='200px'/>
           ItemName: {this.props.item.name} <br></br>
           ItemID: {this.props.item.id}<br></br>
           ManifestID: {this.props.manifestId}<br></br>
           Price: {this.props.item.price} <br></br>

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

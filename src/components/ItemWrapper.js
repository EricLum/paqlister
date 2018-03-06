import React from 'react'
import '../styles/ItemWrapper.css'
import Draggable from 'react-draggable'
import { bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Card, Button,CardTitle} from 'react-materialize'
import {saveManifestItemPosition,sendDeleteRequest} from '../actions/actions'
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

  handleDelete=(e) =>{
    this.props.sendDeleteRequest(this.props.item.id)
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

    if(this.props.partyMode){
      return(
         <Draggable onDrag={this.handleDrag} onStop={this.handleMouseUp} bounds="parent"  position={{x: this.state.x, y: this.state.y}}>
           <div className='box partyMode'>
             <img className='no-drag' src={this.props.item.image} height='200px' width='200px'/>
              <Card header={<CardTitle reveal image={"img/office.jpg"}     waves='light'/>}
             title="Card Title"
             reveal={<div>
                ItemID: {this.props.item.id}<br></br>
                ManifestID: {this.props.manifestId}<br></br>
                Price: {this.props.item.price} <br></br></div>}>
             <p><a href="#">This is a link</a></p>
              </Card>
           </div>
        </Draggable>)
      }

    return(
       <Draggable onDrag={this.handleDrag} onStop={this.handleMouseUp} bounds="parent"  position={{x: this.state.x, y: this.state.y}}>
         <div className='box'>
           <img className='no-drag' src={this.props.item.image} height='200px' width='200px'/>              <Card header={<CardTitle reveal  waves='light'/>}
                        title={this.props.item.name}
                        reveal={<div>
                           ItemID: {this.props.item.id}<br></br>
                           ManifestID: {this.props.manifestId}<br></br>
                           Price: {this.props.item.price} <br></br>
                           <Button onClick={this.handleDelete}>Delete</Button>
                           </div>
                          }
                           >
                        <p><a href="#">This is a link</a></p>
                         </Card>
         </div>
      </Draggable>)
  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveManifestItemPosition,
    sendDeleteRequest
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    manifestItems: state.manifestsReducer.manifestItems
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemWrapper)

import React from 'react'
import {Button,Card} from 'react-materialize'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {cloneManifest} from '../actions/actions'

class ManifestContainerItem extends React.Component {

  handleCopy  = (e) => {
    debugger
    this.props.cloneManifest(this.props.unique_id)
  }

  render() {
    console.log(this.props)
    let updateButton;
    if (this.props.current_user && this.props.current_user.id !== this.props.user){
      updateButton = <Button onClick={this.handleCopy}>Copy</Button>
    }
    return (
      <div className="container" unique_id={this.props.unique_id}>
        <Card className='green darken-1 z-depth-5' textClassName='white-text' title={this.props.title} >
          <p>Unique ID: {this.props.unique_id}</p>
           <p>Limit: {this.props.limit}</p>
           <p>Description: {this.props.description}</p>
           <p>User: {this.props.user}</p>
           {updateButton}
        </Card>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    current_user: state.manifestsReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    cloneManifest
  }, dispatch)
}



export default connect(mapStateToProps,mapDispatchToProps)(ManifestContainerItem)

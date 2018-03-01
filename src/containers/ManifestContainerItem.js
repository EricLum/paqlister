import React from 'react'
import {Col,Card} from 'react-materialize'
import {Link} from 'react-router-dom'
class ManifestContainerItem extends React.Component {

  render() {
    return (
      <div className="container" unique_id={this.props.unique_id}>
        <Card className='green darken-1 z-depth-5' textClassName='white-text' title={this.props.title} >
          {/* <Link to={`/manifests/${this.props.unique_id}`}> test</Link> */}
      <p>Unique ID: {this.props.unique_id}</p>
       <p>Limit: {this.props.limit}</p>
       <p>Description: {this.props.description}</p>
       <p>User: {this.props.user}</p>
        </Card>
      </div>

    )
  }
}

export default ManifestContainerItem

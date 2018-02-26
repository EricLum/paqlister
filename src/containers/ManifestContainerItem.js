import React from 'react'
import {Col,Card} from 'react-materialize'
import {Link} from 'react-router-dom'
class ManifestContainerItem extends React.Component {


  handleOnClick = (e) => {
    console.log(this.props.unique_id)

  }

  render() {
    return (
      <div className="container" unique_id={this.props.unique_id} onClick={this.handleOnClick}>
        <Card className='blue-grey darken-1' textClassName='white-text' title={this.props.title} >
          <Link to={`/collections/${this.props.unique_id}`}> test</Link>
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

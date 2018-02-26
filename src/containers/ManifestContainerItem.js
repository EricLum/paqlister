import React from 'react'
import {Col,Card} from 'react-materialize'
class ManifestContainerItem extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="container">
        <Card className='blue-grey darken-1' textClassName='white-text' title={this.props.name}>
        {this.props.description}
        </Card>
      </div>

    )
  }
}

export default ManifestContainerItem

import React from 'react'
import {Col,Card} from 'react-materialize'
class ManifestContainerItem extends React.Component {

  render() {
    return (
      <div className="container">
        <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'>
        I am a very simple card.
        </Card>
      </div>

    )
  }
}

export default ManifestContainerItem

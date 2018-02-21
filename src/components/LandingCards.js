import React from 'react'
import { Row, Col, Card, Icon } from 'react-materialize'

// import './Navigation.css'
class LandingCards extends React.Component {
  render(){
    return (
      <div className="landing">
        <Row>
          <Col s={6} s={6} className='grid-example'>
            <Card className='blue-grey darken-4' textClassName='white-text' title='Card title'>
              <div>
                <p>Save your collections. Manage your life.</p><br></br>
                <Icon large={true}>share</Icon>
              </div>
            </Card>
          </Col>
          <Col s={6} s={6} className='grid-example'>
            <Card className='blue-grey darken-4' textClassName='white-text' title='Card title'>
                <div>
                  <p>Save your collections. Manage your life.</p><br></br>
                  <Icon large={true}>add_box</Icon>
                </div>
            </Card>
          </Col>
        </Row>
      </div>
      )
  }
}

export default LandingCards

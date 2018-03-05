import React from 'react'
import { Row, Col, Card, Icon } from 'react-materialize'
import '../styles/LandingCards.css'

class LandingCards extends React.Component {
  render(){
    return (
      <div className="landing">
        <Row>
          <Col s={6} className='grid-example'>
            <Card className='brown darken-1' textClassName='white-text' title='Share your collections'>
              <div>
                <p>Manage your life.</p><br></br>
                <Icon large={true}>share</Icon>
              </div>
            </Card>
          </Col>
          <Col s={6} className='grid-example'>
            <Card className='brown darken-1' textClassName='white-text' title='Track your stuff'>
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

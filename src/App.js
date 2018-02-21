import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import Landing from './containers/Landing'
import {Row, Col, Card,Icon} from 'react-materialize'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Landing />
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
    );
  }
}

export default App;

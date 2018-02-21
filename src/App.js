import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import Landing from './containers/Landing'
import {Row, Col, Card} from 'react-materialize'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Landing />
        <Row>
          <Col s={6} s={6} className='grid-example'>
	          <Card className='blue-grey darken-1' textClassName='white-text' title='Card title'>
		              Share your items, express yourself!
            </Card>
          </Col>
          <Col s={6} s={6} className='grid-example'>
            <Card className='grey darken-4' textClassName='white-text' title='Card title'>
                  Save your collections. Manage your life.
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;

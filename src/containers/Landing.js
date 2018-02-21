import React from 'react'
import {Slider, Slide, Row, Col} from 'react-materialize'
import './Landing.css'
class Landing extends React.Component {

  render(){
    return(<div className='landing'>
      <Slider>
        <Slide
          src="/landing2.jpeg"
          title="Your Posessions"
          placement="left">
          Organized.
        </Slide>

      <Slide
        src="/landing.jpeg"
        title="Assemble your items"
        placement="right">
        Never forget your keys again.
      </Slide>

      <Slide
        src="/landing3.jpeg"
        title="Focus on the trip"
        placement="left">
        Not on packing.
      </Slide>
</Slider>

    </div>
)
  }
}

export default Landing

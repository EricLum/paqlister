import React from 'react'
import '../styles/Signup.css'
import {connect} from 'react-redux'
import {signupUser} from '../actions/actions'
import { Redirect } from 'react-router-dom'

class Signup extends React.Component {

  state = {
      username: '',
      password: '',
      passwordConfirmation: ''
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    if (this.state.password === this.state.passwordConfirmation){
      this.props.signupUser('http://localhost:3001/api/v1/users', this.state)
    } else {
      alert("password doesn't match password confirmation")
    }
    this.setState({
      password: '',
      passwordConfirmation: ''
    })
  }

  render(){
    return (
      <div className='signup'>
        {this.props.user.username &&
        <div>
          <Redirect to='/'></Redirect>
        </div>}
        <div className='form'>
          <h2> Sign up! </h2>
          <form onSubmit={this.handleOnSubmit}>
            <div className='input-field'>
              <input type='text' onChange={this.handleOnChange} name='username' id='username'/>
              <label for='name'>username</label>
            </div>
            <div className='input-field'>
              <input type='password' onChange={this.handleOnChange} name='password' id='password'/>
              <label for='password'>password</label>
            </div>
            <div className='input-field'>
              <input type='password' onChange={this.handleOnChange} name='passwordConfirmation' id='passwordConfirmation'/>
              <label for='passwordConfirmation'>confirm password</label>
            </div>
            <input type='submit' />
          </form>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    user: state.manifestsReducer.user
  }
}

export default connect(mapStateToProps,{signupUser})(Signup)

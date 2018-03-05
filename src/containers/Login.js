import React from 'react'
import '../styles/Signup.css'
import {connect} from 'react-redux'
import {userLogin,authUser} from '../actions/actions'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {

  state = {
      username: '',
      password: '',
  }

  handleOnChange = (e) => {
    console.log(this.state)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
      this.props.authUser('http://localhost:3001/api/v1/login', this.state)
      this.setState({
        password: ''
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
          <h2> Login </h2>
          <form onSubmit={this.handleOnSubmit}>
            <div className='input-field'>
              <input type='text' onChange={this.handleOnChange} name='username' id='username'/>
              <label for='name'>username</label>
            </div>
            <div className='input-field'>
              <input type='password' onChange={this.handleOnChange} name='password' id='password'/>
              <label for='password'>password</label>
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

export default connect(mapStateToProps,{userLogin,authUser})(Login)

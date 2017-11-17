import React, {Component} from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { updateTest } from '../../ducks/reducer';
import logLogo from '../../recources/img/auth_logo.png'
import Button from '../Button/Button'


class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state={
      test: 'start'
    }
    this.logIn = this.logIn.bind(this);
    this.regester = this.regester.bind(this);
  }
  getTestEndpoint(){
    let promise = axios.get('http://localhost:3001/api/tests')
    promise.then(res=>{
      this.props.updateTest(res.data[0].username)
    })
  }
  logIn(username, password) {
    console.log(username, password);
    let promise = axios.post('/api/auth/login',{username, password})
    .then(res=>{
      console.log(res);
    })
  } 
  regester(username, password) {
    console.log(username, password);
    let promise = axios.post('/api/auth/register', { username, password })
  }
  render() {
    console.log(this.refs.login_password);
    return (
      <div>

        <img src={logLogo} alt=""/>
        <h2>username</h2>
        <input type="text" ref='login_username'/>
        <h2>Password</h2>
        <input type="text" ref='login_password'/>
        <div>
          <div onClick={() => this.logIn(this.refs.login_username.value, this.refs.login_password.value)}>
           <Button  className="button_light" text="Login"/>
          </div>
          <div onClick={() => this.regester(this.refs.login_username.value, this.refs.login_password.value)}>
            <Button className="button_dark" text="Register"/>
          </div>
        </div>

        {/* <button onClick={() => this.getTestEndpoint()}>{this.state.test}</button>
        <button onClick={()=>this.props.updateTest('reduxComplete')}>{this.props.test}</button> */}
        
      </div>
    );
  }
}

function mapStateToProps(store) {
  console.log(store);
  const { test } = store;

  return {
    test
  };
}

export default connect(mapStateToProps, { updateTest })(LogIn);
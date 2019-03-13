import React, { Component } from 'react';
import axios from 'axios';

import Navbar from '../Navbar/Navbar.jsx';

import snapImg from '../Images/snapimg.png';
import '../Css/usersCss.css';

export default class Register extends Component {

  state = {
    email: '',
    password: '',
    token: localStorage.getItem('userToken')
  }

  emailChange = event => {
    this.setState({ email: event.target.value });
  }

  passwordChange = event => {
    this.setState({ password: event.target.value });
  }
  componentDidMount() {
    if(this.state.token) {
       this.props.history.push('/home');
    }
  }

  userSubmit = event => {
    event.preventDefault();

    axios.post(`https://api.snapchat.wac.epitech.eu/inscription`, { 
      email: this.state.email,
      password: this.state.password    
    }).then(function(res) {
       this.props.history.push('/login');
        // console.log(res);
      })
  }
  
 render() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div className="register">
        <img src={snapImg} alt="snapImg" />
          <h1>Register</h1>
          <form onSubmit={this.userSubmit}>
            <input type="email" name="email" placeholder="Email" onChange={this.emailChange}/>
            <input type="password" name="password" placeholder="Password" onChange={this.passwordChange}/>
            <button type="submit" className="btn btn-block btn-large">Sign in</button>
          </form>
        </div>
      </header>
    </div>
  );
 }
}
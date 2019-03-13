import React, { Component } from 'react';
import axios from 'axios';

import Navbar from '../Navbar/Navbar.jsx';

import snapImg from '../Images/snapimg.png';
import '../Css/usersCss.css';

export default class Login extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      token: localStorage.getItem('userToken')
    };
  }

  componentDidMount() {
    if(this.state.token) {
       this.props.history.push('/home');
    }
  }

  emailCheck = event => {
    this.setState({ email: event.target.value });
  }

  passwordCheck = event => {
    this.setState({ password: event.target.value });
  }

  userSubmit = event => {
    event.preventDefault();
    
    axios.post(`https://api.snapchat.wac.epitech.eu/connection`, {
      email: this.state.email,
      password: this.state.password
    }).then(function(res) {
      localStorage.setItem('userEmail', res.data.data.email);
      localStorage.setItem('userToken', res.data.data.token);
      window.location.href = 'http://localhost:3000/home';
      // console.log(res);
      // console.log(localStorage.getItem('userEmail'));
      // console.log(localStorage.getItem('userToken'));
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
        <div className="login">
          <img src={snapImg} alt="snapImg" />
          <h1>Login</h1>
          <form onSubmit={this.userSubmit}>
            <input type="text" name="email" onChange={this.emailCheck} placeholder="Email"/>
            <input type="password" name="password" onChange={this.passwordCheck} placeholder="Password"/>
            <button type="submit" className="btn btn-block btn-large">Login</button>
          </form>
        </div>
        </header>
      </div>
    );
  }
}
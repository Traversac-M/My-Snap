import React, { Component } from 'react';
import '../Css/navbarCss.css';

export default class App extends Component {

  state = {
    token: localStorage.getItem('userToken')
  }

  logoutFunction() {
    window.localStorage.removeItem("userToken");
    window.localStorage.removeItem("userEmail");
    window.location.href = 'http://localhost:3000/login';
  }

  render() {
    var showElement;
    var showRegister;
    var showSnaps;

    if(this.state.token) {
        showSnaps = <li className="nav-item"> <a href="/snaps" className="nav-link">New Snaps</a> </li>
        showElement = <li className="nav-item"> <button onClick={this.logoutFunction} className="logoutBtn">Logout</button> </li>
    } else {
      showRegister = <li className="nav-item"> <a href="/register" className="nav-link">Register</a> </li>

      showElement = <li className="nav-item"> <a href="/login" className="nav-link">Login</a> </li>                  
    }  

    return (
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-dark">
        <a href="/" className="navbar-brand">My Snap</a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
            </li>

            {showRegister}
            {showSnaps}
            {showElement}

          </ul>
        </div>
      </nav>
    );
  }
}

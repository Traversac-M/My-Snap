import React, { Component } from 'react';
import axios from 'axios';

import Navbar from '../Navbar/Navbar.jsx';

export default class Snaps extends Component {

  state = {
    token: localStorage.getItem('userToken'),
  }

// Get the snaps

  componentDidMount() {
    if(!this.state.token) {
       this.props.history.push('/home');
    }

    axios.get(`https://api.snapchat.wac.epitech.eu/snaps/:id`, {
        headers: {
            token: this.state.token
        }
    }).then(function(res) {
       console.log(res.data.data);
      })  
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          Snaps
        </header>
      </div>
    );
  }
}
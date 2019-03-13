import React, { Component } from 'react';
import axios from 'axios';

import Navbar from '../Navbar/Navbar.jsx'

import snapImg from '../Images/snapimg.png';
import '../Css/homeCss.css';

export default class Home extends Component {
  state = {
    users: [],
    token: localStorage.getItem('userToken'),
    duration: "",
    user: "",
    imgFile: ""
  }

// Get all users emails

  componentDidMount() {
    axios.get(`https://api.snapchat.wac.epitech.eu/all`, {
        headers: {
            token: this.state.token
        }
    }).then(res => {
        if(this.state.token){
            const users = res.data.data;
            this.setState({ users });
        }
      })
  }

// Post a new Snap

  durationCheck = event => {
    this.setState({ duration: event.target.value });
  }
  
  userCheck = event => {
    this.setState({ user: event.target.value });
  }

  imgCheck = event => {
    this.setState({ imgFile: event.target.files[0] });
  }

  snapSubmit = event => {
    event.preventDefault();
    
    var postImg = new FormData();
    postImg.append('duration', this.state.duration);
    postImg.append('to', this.state.user);
    postImg.append('image', this.state.imgFile);
    // console.log(this.state.duration);
    // console.log(this.state.user);
    // console.log(this.state.imgFile);

    axios.post(`https://api.snapchat.wac.epitech.eu/snap`, postImg, {
      headers: {
        'Content-Type': 'multipart/form-data',
        token: this.state.token,
      }
    }).then(function(res) {
       console.log(res.data);
      })  
  }

// Render 2 diff view if logged or not

  render() {
    var notLogged;
    var logged;

    if(!this.state.token) {
      notLogged = <div> You need to be logged to send a Snap !</div>
    } else {
      logged = <form onSubmit={this.snapSubmit}>
                <h1>Send a Snap</h1>
                <select id="selectUsers" onChange={this.userCheck}>
                  <option disabled hidden selected>Send a snap to :</option>
                  {this.state.users.map(user => <option key={user.email}>{user.email}</option>)}
                </select>

                <div className="file-input-wrapper">
                  <button className="btn-file-input">Choose an image</button>
                  <input type="file" id="addImg" accept="image/*" data-type='image' onChange={this.imgCheck} />        
                </div>

                <input type="number" placeholder="seconds" onChange={this.durationCheck} />
                <button type="submit" className="btn">Send snap</button>
              </form>
    }

    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={snapImg} alt="snapImg" />
            {logged}
            {notLogged}   
        </header>
      </div>
    );
  }
}
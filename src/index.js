import React from 'react';
import ReactDOM from 'react-dom';

// Imported files

import Home from './Components/Home/Home.jsx';
import Register from './Components/Users/Register.jsx';
import Login from './Components/Users/Login.jsx';
import Snaps from './Components/Snaps/Snaps.jsx';

// Routing

import { 
  BrowserRouter as Router,
  Route, 
  Switch,
} from 'react-router-dom';

// CSS Files

import './Components/Css/App.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/snaps" component={Snaps} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
  ,document.getElementById('root')
);
import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import UsersList from './components/UsersList'
import User from './components/User'
import PostsList from './components/PostsList'
import NotFound from './components/NotFound'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/users" component={UsersList}/>
          <Route exact path="/users/:id"
          render={props => <User {...props} />} 
          />
          <Route exact path="/users/:id/posts"
          render={props => <PostsList {...props} />} 
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/users" component={UsersList}/>
          <Route exact path="/posts" component={PostsList}/>
          <Route exact path="/users/:id"
          render={props => <User {...props} />} 
          />
          <Route exact path="/users/:id/posts"
          render={props => <UserPosts {...props} />} 
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;

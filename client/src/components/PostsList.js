import React, { Component } from 'react'
import axios from 'axios'

import Post from './Post'

class PostsList extends Component {
  state = {
    posts: []
  }
  
  render() {
    return (
      <div>
        {this.props.posts.map(post => (
          <Post refreshing={this.props.refreshing} handleRefresh={this.props.handleRefresh} {...post}/>
        ))}
      </div>
    )
  }
}

export default PostsList
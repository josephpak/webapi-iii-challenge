import React, { Component } from 'react'
import PostsList from './PostsList';
import axios from 'axios'


class UserPage extends Component {
    state = {
        posts: [],
        refreshing: false,
    }

    handleRefresh = () => {
        this.setState({
            refreshing: !this.state.refreshing
        })
    }

    componentDidMount() {
        axios.get(`https://webapi-iii-challenge-project.herokuapp.com/api/users/${this.props.match.params.id}/posts`)
        .then(res => {
            this.setState({
                posts: res.data
            })    
        })
    }

    componentDidUpdate() {
        axios.get(`https://webapi-iii-challenge-project.herokuapp.com/api/users/${this.props.match.params.id}/posts`)
        .then(res => {
            this.setState({
                posts: res.data
            })    
        })
    }
  
    render() {
    return (
      <div>
        <PostsList refreshing={this.state.refreshing} handleRefresh={this.handleRefresh} posts={this.state.posts}/>
      </div>
    )
  }
}

export default UserPage;
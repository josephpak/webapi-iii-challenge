import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';

const PostListWrapper = styled.div`
    border: 1px solid black;
    width: 500px;
    height: 50px;
    border-radius: 10px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

class Post extends Component {
  
    handleDeletePost = e => {
        e.preventDefault()
        axios.delete(`https://webapi-iii-challenge-project.herokuapp.com/api/posts/${this.props.id}`)
        .then(res => {
            console.log(res)
            this.props.handleRefresh()
        })
        
    }

    render() {
    return (
      <PostListWrapper>
        {this.props.text}
        <button
        onClick={this.handleDeletePost}
        >Delete Post</button>
      </PostListWrapper>
    )
  }
}

export default Post
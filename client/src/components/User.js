import React, { Component } from 'react'
import styled from 'styled-components'

const UserListWrapper = styled.div`
    border: 1px solid black;
    width: 400px;
    height: 200px;
    border-radius: 10px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

class User extends Component {
    
  handleCardClick = () => {
      this.props.history.push(`/users/${this.props.id}`)
  }  

  render() {
    return (
      <UserListWrapper
      onClick={this.handleCardClick}
      >
        {this.props.name}
      </UserListWrapper>
    )
  }
}

export default User
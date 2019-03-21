import React, { Component } from 'react'
import axios from 'axios';

class UsersList extends Component {
  state = {
    users: []
  }
  
  componentDidMount() {
    axios.get('https://webapi-iii-challenge-project.herokuapp.com/api/users')
    .then(res => {
      console.log(res)
      this.setState({
        users: res.data
      })
    })

  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default UsersList
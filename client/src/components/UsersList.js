import React, { Component } from 'react'
import axios from 'axios';

import User from './User'

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
    const props = this.props

    console.log(props)

    return (
      <div>
        <div>
          {this.state.users.map(user => (
            <User {...props} {...user}/>
          ))}
        </div>
      </div>
    )
  }
}

export default UsersList
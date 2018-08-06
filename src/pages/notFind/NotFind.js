import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
class NotFind extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    if (!this.props.isLogin) {
      return <Redirect to="/"/>
    }
    return(
      <div>404</div>
    )
  }
}
export default NotFind
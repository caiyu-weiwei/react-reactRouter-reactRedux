import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
class Home extends Component{
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('Home 渲染完毕')
  }
  outLogin() {
    this.props.OUTLOGIN(this.props.history)
  }
  render() {
    if (!this.props.isLogin) {
      return <Redirect to="/"/>
    }
    return(
      <div>
        <h3>主页</h3>
        <div>
          <button onClick={this.outLogin.bind(this)}>退出登录</button>
        </div>
      </div>
    )
  }
} 
export default Home
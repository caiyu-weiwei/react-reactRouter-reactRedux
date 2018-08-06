import React, { Component } from 'react'
class Login extends Component{
  constructor(props) {
    super(props)
    this.goLogin = this.goLogin.bind(this)
  }
  goLogin() {
    alert('开始登录')
    this.props.GOLOGIN(this.refs.username.value, this.refs.password.value, this.props.history)
  }
  componentDidMount() {
    console.log('Login 渲染完毕')
  }
  render() {
    return (
      <div>
        <h3>登录页面</h3>
        <div>
            用户名: <input type="text" ref="username"/>
        </div>
        <div>
            密码: <input type="text" ref="password"/>
        </div>
        <div>
            <button onClick={this.goLogin}>登录</button>
        </div>
      </div>
    )
  }
}
export default Login
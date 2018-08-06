import { connect } from 'react-redux'
import Login from './Login'

var mapStateToProps = (state) => {
  console.log(state)
  return {}
}

var mapDispatchToProps = (dispatch) => {
  return {
    GOLOGIN: (username, password, history) => {
      console.log(username)
      console.log(password)
      console.log(history)
      setTimeout(() => {
        dispatch({type: "GO_LOGIN"})
        history.push("/Home")
      }, 1000)
    }
  }
}
var LoginReactRedux = connect(mapStateToProps, mapDispatchToProps)(Login)
export default LoginReactRedux
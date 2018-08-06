import { connect } from 'react-redux'
import Nav from './Nav'

var mapStateToProps = (state) => {
    console.log(state)
  return {
    isLogin: state.isLogin
  }
}

var mapDispatchToProps = (dispatch) => {
  return {}
}

var NavReactRedux = connect(mapStateToProps, mapDispatchToProps)(Nav)
export default NavReactRedux
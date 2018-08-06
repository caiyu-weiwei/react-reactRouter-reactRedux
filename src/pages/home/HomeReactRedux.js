import { connect } from 'react-redux'
import Home from './Home'

var mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin
  }
}

var mapDispatchToProps = (dispatch) => {
  return {
    OUTLOGIN: (history) => {
      dispatch({type: "OUT_LOGIN"})
      history.push('/')
    }
  }
}

var HomeReactRedux = connect(mapStateToProps, mapDispatchToProps)(Home)
export default HomeReactRedux
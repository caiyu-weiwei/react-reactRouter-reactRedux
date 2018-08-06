import { connect } from 'react-redux'
import News from './News';

var mapStateToProps = (state) => {
  console.log(state)
  return {
    list: state.NewsRedux.list
  }
}
var mapDispatchToProps = (dispatch) => {
  return {
    SORTREVERSE: () => {
      dispatch({type: 'SORT_REVERSE'})
    }
  }
}
var NewsReactRedux = connect(mapStateToProps, mapDispatchToProps)(News)
export default NewsReactRedux
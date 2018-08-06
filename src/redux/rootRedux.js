import { combineReducers } from 'redux'
import isLogin from './indexRedux'
import NewsRedux from '../pages/news/NewsRedux'
var rootRedux = combineReducers({
  isLogin,
  NewsRedux
})
export default rootRedux
var isLogin = false
var indexRedux = (state = isLogin, action) => {
  switch(action.type) {
    case 'GO_LOGIN':
      return true
    case 'OUT_LOGIN':
      return false
    default:
      return state
  }
}
export default indexRedux
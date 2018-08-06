var newsInit = {
    list: [
        {id: 1, title: 'a', con: 'aaaaaaaaaaaaaaaaa'},
        {id: 2, title: 'b', con: 'bbbbbbbbbbbbbbbbb'},
        {id: 3, title: 'c', con: 'ccccccccccccccccc'},
        {id: 4, title: 'd', con: 'ddddddddddddddddd'},
        {id: 5, title: 'e', con: 'eeeeeeeeeeeeeeeee'}
    ]
}
var newsRedux = (state = newsInit, action) => {
  switch(action.type) {
    case "SORT_REVERSE":
      var arr = []
      state.list.map(item => {
        arr.unshift(item)
      })
      return Object.assign({}, state, {list: arr})
    default:
      return state
  }
}
export default newsRedux
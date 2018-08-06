import React, { Component } from 'react'
class News extends Component{
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('News 渲染完毕')
    console.log(this.props)
  }
  SORTREVERSE() {
    this.props.SORTREVERSE()
  }
  render() {
    return (
      <div>
        <h3>新闻页面</h3>
        <ul>
          {
            this.props.list.map(item => (
                <li key={item.id}>
                    <a>{item.title}</a>
                    <span>{item.con}</span>
                </li>
            ))
          }
        </ul>
        <button onClick={this.SORTREVERSE.bind(this)}>倒叙显示</button>
      </div>
    )
  }
}
export default News
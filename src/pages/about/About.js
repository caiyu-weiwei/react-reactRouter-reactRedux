import React, { Component } from 'react'
class About extends Component{
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('About 渲染完毕')
  }
  render() {
    return(
      <div>
        <h3>关于我们</h3>
      </div> 
    )
  }
}
export default About
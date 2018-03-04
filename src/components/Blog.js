import React from 'react'
import '../index.css'


class Blog extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
          long: props.value
      }
  }


  longInformation = () => {
      const blog = this.props.blog
      return (
          <div className={"blog"}>
              <h3 onClick={this.toggleLongFalse}>{blog.title}</h3>
              <p>{blog.author}</p>
              <a href={blog.url}>{blog.url}</a>
              <p>{blog.likes} tykkäystä <button>tykkää</button></p> 
          </div> 
      )
  }

  shortInformation = () => {
      const blog = this.props.blog
      return (
          <div  key={blog._id} className={"blog"}>
              {blog.title}
          </div>
      )
  }


  toggleLongFalse = () => {
      this.setState({long: false})
  }

  toggleLongTrue = () => {
      this.setState({long: true})
  }

  render() {
      if (this.state.long) {
          return (
              <div>
                  {this.longInformation()}
              </div>
          )
      } else {
          return (
              <div onClick={this.toggleLongTrue} >
                  {this.shortInformation()}
              </div>    
          )
      }
  }
}



export default Blog
import React from 'react'
import Blog from './components/Blog'
/* import LoginForm from './components/LoginForm' */
import blogService from './services/blogs'
import loginService from './services/loginService'

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log('alun state:ien luonti')
    this.state = {
      blogs: [],
      user: null,
      username: "",
      password: "",
      error: "",
      name: "",

      title: "",
      author: "",
      url: ""
    }
  }

  async componentDidMount() {
    const blogs = await blogService.getAll()
    this.setState({ blogs })

    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({ user })
      blogService.setToken(user.token)
      this.setState({ name: user.name })
    }

  }

  handleFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    console.log(event.target.value)
  }

  login = async (event) => {
    event.preventDefault()
    console.log('login in with: ', this.state.username, this.state.password)

    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })

      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      blogService.setToken(user.token)

      this.setState({ name: user.name, username: '', password: '', user })
      console.log('nimi asetetaan userin mukaan:')
      console.log(this.state.name)
      console.log(this.state.user)

    } catch (exception) {
      this.setState({
        error: 'käyttäjätunnus tai salasana virheellinen',
      })

      console.log(exception)
      console.log(this.state.error)

      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }

  logout = async () => {
    console.log('siirryttiin logout metodiin')

    window.localStorage.removeItem('loggedBlogappUser')
    this.setState({ user: null, username: '', password: '' })
    window.localStorage.clear()

  }

  addBlog = async (event) => {
    event.preventDefault()
    console.log('blogin lisäys-metodissa')
    try {
      const newBlog = await blogService.create({
        title: this.state.title,
        author: this.state.author,
        url: this.state.url
      })
      this.setState({
        blogs: this.state.blogs.concat(newBlog),
        title: "",
        author: "",
        url: ""
      })

    
    } catch (exception) {
      this.setState({
        error: 'blogia ei voitu lisätä',
      })

      console.log(exception)
      console.log(this.state.error)

      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
    
  }

  render() {

    if (this.state.user === null) {
      console.log('ensimmäinen if renderissä')
      return (
        <div>
          <h2>Kirjaudu sovellukseen</h2>
          <form onSubmit={this.login}>
            <div>
              käyttäjätunnus
            <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleFieldChange}
              />
            </div>
            <div>
              salasana
            <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleFieldChange}
              />
            </div>
            <button type="submit"> Kirjaudu </button>
          </form>
        </div>
      )
    }

    return (
      <div>
        <h2>Blogit</h2>
        {this.state.name} kirjautuneena sisään  <form onSubmit={this.logout}> <button type="submit">Kirjaudu ulos</button> </form>
        <br />
        <br />
        {this.state.blogs.map(blog =>
          <Blog key={blog._id} blog={blog} />
        )}

        <h2>Luo uusi</h2>
        <form onSubmit={this.addBlog}>
          <div>
            otsikko:
          <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleFieldChange}
            />
          </div>
          <div>
            omistaja:
          <input
              type="text"
              name="author"
              value={this.state.author}
              onChange={this.handleFieldChange}
            />
          </div>
          <div>
            url:
          <input
              type="text"
              name="url"
              value={this.state.url}
              onChange={this.handleFieldChange}
            />
          </div>
          <button type="submit">Luo blogi</button>
        </form>
      </div>
    )
  }
}

export default App;

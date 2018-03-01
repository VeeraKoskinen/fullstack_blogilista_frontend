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
      name: ""
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
      this.setState({ name: user.name})
    }

  }

  handleLoginFieldChange = (event) => {
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
                onChange={this.handleLoginFieldChange}
              />
            </div>
            <div>
              salasana
            <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleLoginFieldChange}
              />
            </div>
            <button type="submit"> Kirjaudu </button>
          </form>
        </div>
      )
    }

    return (
      <div>
        <h2>blogs</h2>
        {this.state.name} kirjautuneena sisään  <form onSubmit={this.logout}> <button type="submit">Kirjaudu ulos</button> </form>
        <br />
        <br />
        {this.state.blogs.map(blog =>
          <Blog key={blog._id} blog={blog} />
        )}
      </div>
    )
  }
}

export default App;

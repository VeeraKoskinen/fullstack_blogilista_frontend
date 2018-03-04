import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
jest.mock('./services/blogs')
import blogService from './services/blogs'

describe('<App />', () => {
  let app
  beforeAll(() => {
    app = mount(<App />)
  })

  it('does not render blogs if when there is not user logged in', () => {
    app.update()

    const blogComponents = app.find(Blog)
    expect(blogComponents.length).toEqual(0)

    expect(app.text()).toContain("Kirjaudu sovellukseen")


  })
})
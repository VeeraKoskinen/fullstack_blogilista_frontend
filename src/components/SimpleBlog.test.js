import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
  it('renders title', () => {
    const blog = {
      title: 'Komponenttitestaus tapahtuu jestillä ja enzymellä',
      author: 'Komponentti',
      url: 'www.komponentitreactissa.fi'
    }

    const blogTitle = shallow(<SimpleBlog blog={blog} />)

    const titleDiv = blogTitle.find('.title')

    expect(titleDiv.text()).toContain(blog.title)
  })

  it('renders author', () => {
    const blog = {
      title: 'Komponenttitestaus tapahtuu jestillä ja enzymellä',
      author: 'Komponentti',
      url: 'www.komponentitreactissa.fi'
    }

    const blogAuthor = shallow(<SimpleBlog blog={blog} />)

    const authorDiv = blogAuthor.find('.title')
    console.log(authorDiv)
    expect(authorDiv.text()).toContain(blog.author)
  })

  it('renders likes', () => {
    const blog = {
      title: 'Komponenttitestaus tapahtuu jestillä ja enzymellä',
      author: 'Komponentti',
      url: 'www.komponentitreactissa.fi',
      likes: 28
    }

    const blogLikes = shallow(<SimpleBlog blog={blog} />)
    console.log(blogLikes.text())
    console.log(blogLikes.debug())

    const likesDiv = blogLikes.find('.likes')
    console.log(likesDiv.debug())


    expect(likesDiv.text()).toContain("28")
  })
})
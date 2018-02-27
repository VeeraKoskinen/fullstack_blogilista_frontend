import React from 'react'

const loginForm = ({ props }) => (
  <div>
    <form onSubmit={props.login}>
      <div>
        käyttäjätunnus
          <input
          type="text"
          name="username"
          value={props.username}
          onChange={props.handler}
        />
      </div>
      <div>
        salasana
          <input
          type="password"
          name="password"
          value={props.password}
          onChange={props.handler}
        />
      </div>
      <button type="submit">kirjaudu</button>
    </form>
  </div>
)


export default { loginForm }


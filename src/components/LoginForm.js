import React from 'react'

const LoginForm = ({ onSubmit, username, handleFieldChange, password }) => (
  <div>
    <h2>Kirjaudu sovellukseen</h2>
          <form onSubmit={onSubmit}>
            <div>
              käyttäjätunnus
            <input
                type="text"
                name="username"
                value={username}
                onChange={handleFieldChange}
              />
            </div>
            <div>
              salasana
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleFieldChange}
              />
            </div>
            <button type="submit"> Kirjaudu </button>
          </form>
  </div>
)


export default  LoginForm 


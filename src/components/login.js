import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { handleLogin, isLoggedIn } from '../services/auth'

const Login = () => {

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    handleLogin({ username, password })
  }

  if (isLoggedIn()) navigate('/app/profile')

  return (
    <>
      <h1>Log in</h1>
      <form
        method='post'
        onSubmit={e => {
          handleSubmit(e)
          navigate('/app/profile')
        }}
      >
        <label>
          Username
          <input
            type='text'
            name='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type='password'
            name='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <input
          type='submit'
          value='Log in'
        />
      </form>
    </>
  )
}

export default Login
import React from 'react'
import { Link } from 'gatsby'
import { isAuthenticated, getProfile, login, logout } from '../utils/auth'

const Navigation = () => {

  let greetingMessage = ''
  if (isAuthenticated()) {
    greetingMessage = `Hello ${getProfile().name}`
  } else {
    greetingMessage = 'You are not logged in'
  }

  return (
    <>
      <span>{greetingMessage}</span>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/app/profile'>Profile</Link>
        {!isAuthenticated() ? (
          <button onClick={() => login()}>Log in</button>
        ) : (
          <button onClick={() => logout()}>Log out</button>
        )}
      </nav>
    </>
  )
}

export default Navigation
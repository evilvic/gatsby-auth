import React from 'react'
import { Link, navigate } from 'gatsby'
import { getUser, isLoggedIn, logout } from '../services/auth'

const Navigation = () => {

  let greetingMessage = ''
  if (isLoggedIn()) {
    greetingMessage = `Hello ${getUser().name}`
  } else {
    greetingMessage = 'You are not logged in'
  }

  return (
    <>
      <span>{greetingMessage}</span>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/app/profile'>Profile</Link>
        {isLoggedIn() ? (
          <a
            href='/'
            onClick={e => {
              e.preventDefault()
              logout(() => navigate('/app/login'))
            }}
          >
            Logout
          </a>
        ) : null}
      </nav>
    </>
  )
}

export default Navigation
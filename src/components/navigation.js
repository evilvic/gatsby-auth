import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => {
  return (
    <>
      <span>You are not logged in</span>
      <Link to='/'>Home</Link>
      <Link to='/'>Profile</Link>
      <Link to='/'>Logout</Link>
    </>
  )
}

export default Navigation
import React from 'react'
import { isAuthenticated, login } from '../utils/auth'

const Private = ({ component: Component, location, ...rest }) => {
  if (!isAuthenticated()) {
    login()
    return null
  }
  return <Component {...rest}/>
}

export default Private
import React from 'react'
import { getUser } from '../services/auth'

const Profile = () => {
  return (
    <>
      <h1>Your profile</h1>
      <ul>
        <li>Name: {getUser().name}</li>
        <li>Email: {getUser().email}</li>
      </ul>
    </>
  )
}

export default Profile
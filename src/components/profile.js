import React from 'react'
import { getProfile } from '../utils/auth'

const Profile = () => {
  return (
    <>
      <h1>Your profile</h1>
      <ul>
        <li>Name: {getProfile().name}</li>
      </ul>
    </>
  )
}

export default Profile
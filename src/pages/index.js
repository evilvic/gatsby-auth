import React from 'react'
import { Link } from 'gatsby'
import { getProfile, isAuthenticated, login } from '../utils/auth'
import Layout from '../components/layout'

const Home = () => {
  return (
    <Layout>
      <h1>Hello {isAuthenticated() ? getProfile().name : 'world'}!</h1>
      <p>
        {isAuthenticated() ? (
          <>
            You are logged in, so check your{' '}
            <Link to='/app/profile'>profile</Link>
          </>
        ) : (
          <>
            You should <button onClick={() => login()}>log in</button> to see{' '}
            restricted content
          </>
        )}
      </p>
    </Layout>
  )
}

export default Home
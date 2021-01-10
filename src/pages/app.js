import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import Private from '../components/private'
import Profile from '../components/profile'
import Login from '../components/login'

const App = () => {
  return (
    <Layout>
      <Router>
        <Private path='/app/profile' component={Profile}/>
        <Login path='/app/login'/>
      </Router>
    </Layout>
  )
}

export default App
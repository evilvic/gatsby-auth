import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import Private from '../components/private'
import Profile from '../components/profile'

const App = () => {
  return (
    <Layout>
      <Router>
        <Private path='/app/profile' component={Profile}/>
      </Router>
    </Layout>
  )
}

export default App
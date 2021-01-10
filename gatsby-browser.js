import React, { Component } from 'react'
import { silentAuth } from './src/utils/auth'

class SessionCheck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  handleCheckSession = () => {
    this.setState({ loading: false })
  }

  componentDidMount() {
    silentAuth(this.handleCheckSession)
  }

  render() {
    return (
      this.state.loading === false && (
        <>{this.props.children}</>
      )
    )
  }
}

export const wrapRootElement = ({ element }) => {
  return <SessionCheck>{element}</SessionCheck>
}
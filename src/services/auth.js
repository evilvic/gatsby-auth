export const isBrowser = () => typeof window !== 'undefined'

export const getUser = () => 
  isBrowser() && window.localStorage.getItem('user')
  ? JSON.parse(window.localStorage.getItem('user'))
  : {}

const setUser = user => 
  window.localStorage.setItem('user', JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  if (username === 'vic' && password === 'pass') {
    return setUser({
      username: 'vic',
      name: 'Víctor',
      email: 'vic.pero@icloud.com'
    })
  }
  return false
}

export const isLoggedIn = () => {
  const user = getUser()
  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}
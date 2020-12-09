import userStore from '../mobx/UserStore'
const BASE_URL = 'https://bravosul-app.herokuapp.com'

const getHeaders = userContext => {
    const baseHeaders = {
        'Content-Type': 'application/json; charset=UTF-8'
    }
  if (userStore.userContext) {
    return {
        ...baseHeaders,
      Authentication: `Bearer ${userContext.jwt}`
    }
  }
  return {...baseHeaders}
}

const Fetch = (url, options = {}) => {
  const headers = getHeaders(userStore.userContext)
  const config = {
    ...options,
    headers
  }
  return fetch(`${BASE_URL}${url}`, config)
}

export default Fetch

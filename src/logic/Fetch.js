import userStore from '../mobx/UserStore'
import Logger from '../utils/Logger'
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
  return { ...baseHeaders }
}

const Fetch = async (url, options = {}) => {
  const headers = getHeaders(userStore.userContext)
  const config = {
    ...options,
    headers
  }
  try {
    const response = await fetch(`${BASE_URL}${url}`, config)
    const data = await response.json()

    if (response.ok) {
      return data
    }

    return Promise.reject(data)
  } catch (e) {
    Logger.error(e)
  }
}

export default Fetch

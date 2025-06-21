import axios from 'axios'

export const customAPI = () => {
  return axios.create({
    baseURL: process.env.API_BASE_URL || '/',
    headers: {
      'Content-Type': 'application/json',
      'x-origin-application': 'betting-tool'
    }
  })
}

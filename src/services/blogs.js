import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const create = async (newObject) => {
  const configuration = {
    headers: { 'Authorization': token }
  }
  const response = await axios.post(baseUrl, newObject, configuration)
  return response.data
}

export default { getAll, setToken, create }
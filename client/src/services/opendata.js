import axios from 'axios'

const baseUrl = '/api/data'

//fetch data from server with axios

const getOpenData = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export { getOpenData }

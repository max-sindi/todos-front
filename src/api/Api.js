import axios from 'axios'
const baseUrl = 'localhost:3000'

class Api {
  createRequest(url, method, params) {
    return axios[method](`${baseUrl}/${url}`, params)
  }
}

export default Api

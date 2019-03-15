import axios from 'axios'
// const baseUrl = process.env.API_DOMAIN
const baseUrl = 'http://localhost:8080'

class Api {
  sendRequest(url, method, params) {
    return axios[method](`${baseUrl}/${url}`, params)
  }
}

export default Api

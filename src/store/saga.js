import { createRequestInstance, watchRequests } from 'redux-saga-requests'
import { createDriver } from 'redux-saga-requests-axios'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'
// axios.defaults.headers['Access-Control-Allow-Origin'] = '*'
// axios.defaults.crossdomain = true

export default function* rootSaga() {
  yield createRequestInstance({ driver: createDriver(axios) })
  yield watchRequests()
}
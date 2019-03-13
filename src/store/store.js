import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const middlewares = [
  thunk,
]

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__

const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(...middlewares),
    reduxDevtools ? reduxDevtools() : f => f
  )
)

export default store

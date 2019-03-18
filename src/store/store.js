import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { createLogger } from 'redux-logger'

const logger = createLogger({
  diff: true,
  collapsed: true,
})

const middlewares = [
  thunk,
  logger,
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

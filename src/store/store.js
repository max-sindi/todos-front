import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'

const logger = createLogger({
  diff: true,
  collapsed: true,
})

const saga = createSagaMiddleware()

const middlewares = [
  thunk,
  saga,
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

saga.run(rootSaga)

export default store

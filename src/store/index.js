import {compose, applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk"
import {createLogger} from "redux-logger"
import createSaga from 'redux-saga'
import rootSaga from './saga'
import combinedReducers from "./reducers"

const logger = createLogger({diff: true, collapsed: true})
const saga = createSaga()
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__

const store = createStore(
  combinedReducers,
  undefined,
  compose(
    applyMiddleware( thunk, saga, logger),
    reduxDevtools ? reduxDevtools() : f => f
  )
)

saga.run(rootSaga)

export default store
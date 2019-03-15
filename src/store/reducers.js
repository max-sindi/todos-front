import { combineReducers } from 'redux'
import todos from './todos/todosReducer'
import notifications from './notifications/notificationReducer'

const reducers = combineReducers({
  todos,
  notifications,
})

export default reducers

import { combineReducers } from 'redux'
import todos from './todos/todosReducer'
import notifications from './notifications/notificationReducer'
import general from './general/generalReducer'

const reducers = combineReducers({
  todos,
  notifications,
  general,
})

export default reducers

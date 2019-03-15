import { combineReducers } from 'redux'
import todos from './todos/todosReducer'

const reducers = combineReducers({
  todos,
})

export default reducers

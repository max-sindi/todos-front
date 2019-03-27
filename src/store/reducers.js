import {combineReducers} from "redux"
import {todos, todo}from "./todos/todosReducer"
import notifications from "./notifications/notificationsReducer"

const reducers = combineReducers({
  todos,
  todo,
  notifications,
})

export default reducers
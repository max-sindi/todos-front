import {combineReducers} from "redux"
import {todos, todo}from "./todos/todosReducer"
import notifications from "./notifications/notificationsReducer"
import search from "./search/searchReducer"

const reducers = combineReducers({
  todos,
  todo,
  notifications,
  search,
})

export default reducers
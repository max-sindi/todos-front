import {combineReducers} from "redux"
import {todos, todo}from "./todos/todosReducer"
import notifications from "./notifications/notificationsReducer"
import search from "./search/searchReducer"
import todosFilters from "./todosFilters/todosFiltersReducer"

const reducers = combineReducers({
  todos,
  todo,
  notifications,
  search,
  todosFilters,
})

export default reducers
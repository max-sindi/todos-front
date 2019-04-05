import {combineReducers} from "redux"
import {todos, todo}from "./todos/todosReducer"
import search from "./search/searchReducer"
import todosFilters from "./todosFilters/todosFiltersReducer"

const reducers = combineReducers({
  todos,
  todo,
  search,
  todosFilters,
})

export default reducers
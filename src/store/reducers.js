import {combineReducers} from "redux"
import {todos, todo}from "./todos/todosReducer"

const reducers = combineReducers({
  todos,
  todo,
})

export default reducers
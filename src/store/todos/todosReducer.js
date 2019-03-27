import {types} from "./todosActions"
import {requestsReducer} from "redux-saga-requests"

export const todos = requestsReducer({actionType: types.FETCH_TODOS})

export const todo = requestsReducer({ actionType: types.FETCH_TODO_SINGLE})

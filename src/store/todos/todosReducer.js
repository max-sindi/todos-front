import {types} from "./todosActions"
import {requestsReducer} from "redux-saga-requests"
import {success} from "redux-saga-requests"

const initialState = {
  data: [],
  isFetching: false,
}


export const todos = (state = initialState, action) => {
  const {type, payload, data, meta} = action

  const availableMutations = {
    [success(types.FETCH_TODOS)]: () => ({...state, data}),
  }

  const matchedAction = availableMutations[type]

  if(matchedAction) {
    return matchedAction()
  } else {
    return state
  }
}

export const todo = requestsReducer({ actionType: types.FETCH_TODO_SINGLE})

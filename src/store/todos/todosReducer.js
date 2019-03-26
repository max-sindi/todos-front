// import {types} from "./todosActions"
import {requestsReducer} from "redux-saga-requests"

// const initialState = {
//   todosList: null,
//   isFetching: false,
// }


const todos = requestsReducer({
  actionType: `FETCH_TODOS`,
})

export default todos
// export default (state = initialState, action) => {
//   const { payload, type } = action
//
//   const availableMutations = {
//     [types.FETCH_TODOS]: () => ({...state, isFetching: true}),
//     [types.FETCH_TODOS]: () => ({...state,})
//   }
//
//   const matchedAction = availableMutations[type]
//
//   if(matchedAction) {
//     return matchedAction()
//   } else {
//     return state
//   }
//
// }
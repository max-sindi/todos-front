import {success} from "redux-saga-requests";
import {types} from "../todos/todosActions";

const initialState = {
  searchString: '',
}

export default (state = initialState, action) => {
  const {type} = action

  const availableMutations = {
    [SEARCH_CHANGE_VALUE
  }

  const matchedAction = availableMutations[type]

  if(matchedAction) {
    return matchedAction()
  } else {
    return state
  }
}
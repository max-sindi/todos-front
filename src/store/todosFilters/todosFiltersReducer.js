import {types} from "./todosFiltersActions"


export const filtersVariations = {
  all: {},
  done: {done: true},
  notDone: {done: false}
}

const initialState = {
  filterByDone: 'all'
}

export default (state = initialState, action) => {
  const {type, payload} = action

  const availableMutations = {
    [types.TODOS_FILTERS_CHANGE_BY_DONE]: () => ({...state, filterByDone: payload})
  }

  const matchedAction = availableMutations[type]

  if(matchedAction) {
    return matchedAction()
  } else {
    return state
  }
}
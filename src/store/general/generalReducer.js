import {
  GENERAL_CHANGE_FILTER_VALUE,
  GENERAL_CLEAR_FILTER,
} from './actionTypes'

const initialState = {
  filterValue: '',
}

export default function (state = initialState, action) {
  const { type, payloads } = action

  switch (type) {

    case GENERAL_CHANGE_FILTER_VALUE:
      return {...state, filterValue: payloads.value}

    case GENERAL_CLEAR_FILTER: {
      return {...state, filterValue: '' }
    }

    default:
      return state
  }
}

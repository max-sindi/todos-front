import { TODOS_CHANGE_FORM_VALUE, TODOS_CLEAR_FORM, TODOS_GOT } from './actionTypes'

const initialState = {
  form: {
    title: {
      value: '',
    },
    body: {
      value: '',
    },
  },
  gettedTodos: null,
  isFetchedGet: false,
}

export default (state = initialState, action) => {
  const { type, payloads } = action

  switch(type) {
    case TODOS_CHANGE_FORM_VALUE: {
      const { name, value } = payloads
      return {
        ...state,
        form: {
          ...state.form,
          [name]: {
            ...state.form[name],
            value,
          }
        }
      }
    }

    case TODOS_CLEAR_FORM: {
      return { ...initialState }
    }

    case TODOS_GOT: {
      return {
        ...state,
        gettedTodos: payloads.data
      }
    }

    default: return state
  }
}

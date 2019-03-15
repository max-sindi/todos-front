import actionTypes from './actionTypes'

const initialState = {
  form: {
    title: {
      value: '',
    },
    body: {
      value: '',
    },
  }
}

export default (state = initialState, action) => {
  const { type, payloads } = action

  switch(type) {
    case actionTypes.TODOS_CHANGE_FORM_VALUE: {
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

    default: return state
  }
}

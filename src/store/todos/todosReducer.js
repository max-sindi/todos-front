import _ from 'lodash'
import {
  TODOS_CHANGE_FORM_VALUE,
  TODOS_CLEAR_FORM,
  TODOS_GOT,
  TODOS_DELETED_ONE,
  TODOS_FETCH_SINGLE,
} from './actionTypes'

const initialFormState = {
  // form: {
    title: {
      value: '',
    },
    body: {
      value: '',
    },
}

const initialState = {
  form: {...initialFormState},
  gettedTodos: null,
  isFetchedGet: false,
  fetchedSingleTodo: null,
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
      return { ...state, form: _.cloneDeep(initialFormState) }
    }

    case TODOS_GOT: {
      return {
        ...state,
        gettedTodos: payloads.data
      }
    }

    case TODOS_DELETED_ONE: {
      const newTodos = [].concat(state.gettedTodos)
      newTodos.splice(payloads.index, 1)

      return {
        ...state,
        gettedTodos: newTodos
      }
    }

    case TODOS_FETCH_SINGLE: {

      const createFilledForm = data => {
        const newForm = _.cloneDeep(initialFormState)
        // debugger
        ['title', 'body'].forEach(key => newForm[key].value = data[key])
        // _.forEach(data, (value, key) => newForm[key].value = value)
        debugger
        return newForm
      }

      return {
        ...state,
        form: createFilledForm(payloads.data),
        fetchedSingleTodo: payloads.data,
      }
    }

    default: return state
  }
}

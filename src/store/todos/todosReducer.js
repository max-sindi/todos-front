import _ from 'lodash'
import {
  TODOS_CHANGE_FORM_VALUE,
  TODOS_CLEAR_FORM,
  TODOS_GOT,
  TODOS_DELETED_ONE,
  TODOS_FETCH_SINGLE,
  TODOS_RESET_EDITING,
} from './actionTypes'

const initialFormState = {
  title: {
    value: '',
  },
  body: {
    value: '',
  },
  isDone: {
    value: false
  }
}

const initialState = {
  form: {...initialFormState},
  gettedTodos: null,
  isFetchedGet: false,
  fetchedSingleTodo: null,
}

const createFilledForm = data => {
  const newForm = _.cloneDeep(initialFormState);
  ['title', 'body', 'isDone'].forEach(key => newForm[key].value = data[key])
  return newForm
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

    case TODOS_RESET_EDITING: {
      return { ...state, form: createFilledForm(state.fetchedSingleTodo)}
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
      return {
        ...state,
        form: createFilledForm(payloads.data),
        fetchedSingleTodo: payloads.data,
      }
    }

    default: return state
  }
}

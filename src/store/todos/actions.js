import actionTypes from './actionTypes'
import { TodosApi } from 'api'
import { getDataFormForm } from 'store/_utils/'

export const changeFormValue = ({ name, value }) => ({
  type: actionTypes.TODOS_CHANGE_FORM_VALUE,
  payloads: {
    name,
    value,
  }
})

export const saveCurrentTodo = () => {
  return (dispatch, getState) => {
    const todo = getState().todos.form
    debugger
    TodosApi.saveNewTodo(todo)
    // dispatch({ type: actionTypes.SAVE_NEW_TODO })
  }
}

export default {
  changeFormValue,
  saveCurrentTodo,
}

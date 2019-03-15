import { TODOS_CHANGE_FORM_VALUE, TODOS_CLEAR_FORM, TODOS_GOT } from './actionTypes'
import { createNotification, withDefaultMessage } from '../notifications/actions'
import { TodosApi } from 'api'
import { getFormData } from 'store/_utils'

const successMessage = (todoName) => `Your todo ${todoName} was successfully created`

export const changeFormValue = ({ name, value }) => ({
  type: TODOS_CHANGE_FORM_VALUE,
  payloads: { name, value }
})

export const saveCurrentTodo = () => {
  return (dispatch, getState) => {
    const todo = getFormData( getState().todos.form )

    new TodosApi().saveNewTodo(todo)
      .then( res => {
        dispatch( createNotification(true, successMessage(res.title) ))
        dispatch( clearTodoForm() )
      })
      .catch( err => dispatch( withDefaultMessage(err) ))
  }
}

export const initTodosGetting = () => {
  return dispatch => {
    new TodosApi().getTodos()
      .then(res => dispatch({ type: TODOS_GOT, payloads: { data: res.data } }) )
      .catch(err => dispatch( withDefaultMessage(err) ))
  }
}

export const clearTodoForm = () => ({ type: TODOS_CLEAR_FORM })

export default {
  changeFormValue,
  saveCurrentTodo,
  clearTodoForm,
  initTodosGetting,
}

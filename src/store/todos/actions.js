import { TodosApi } from 'api'
import { getFormData, createAction } from 'store/_utils'
import {
  createNotification,
  defaultErrorCatcher
} from '../notifications/actions'
import {
  TODOS_CHANGE_FORM_VALUE,
  TODOS_CLEAR_FORM,
  TODOS_GOT,
  TODOS_DELETED_ONE,
  TODOS_FETCH_SINGLE,
  TODOS_RESET_EDITING,
} from './actionTypes'

const successCreateMessage = todoName => `Your todo ${todoName} was successfully created`
const successDeleteMessage = (todoName = '') => `Todo ${todoName} was successfully deleted`
const successEditMessage = todoName => `Todo ${todoName} was successfully edited`
const getDataFromResult = res => res.data

// FETCHING SINNGLE
export const fetchTodoSingle = id => dispatch => {
  new TodosApi().getTodoSingle(id)
    .then( res => dispatch(
      createAction(TODOS_FETCH_SINGLE, { data: getDataFromResult(res) })
    ))
    .catch(defaultErrorCatcher)
}
// SAVE EDITED
export const saveEditTodo = () => (dispatch, getState) => {
  const { todos } = getState()
  const { id } = todos.fetchedSingleTodo
  const dataToSend = getFormData(todos.form)

  return new TodosApi().saveEdit(id, dataToSend)
    .then(res =>
      createNotification(true, successEditMessage( todos.form.title.value ))
    )
    .catch(defaultErrorCatcher)
}

// CHANGE ANY FORM VALUE
export const changeFormValue = ({ name, value }) => (
  createAction(TODOS_CHANGE_FORM_VALUE, { name, value })
)

// SAVE NEW
export const saveNewTodo = () => (dispatch, getState) => {
  const todo = getFormData( getState().todos.form )

  return new TodosApi().saveNewTodo(todo)
    .then( res => {
      createNotification(true, successCreateMessage(todo.title))
      dispatch( clearTodoForm() )
    })
    .catch(defaultErrorCatcher)
}

// GET MANY
export const initTodosGetting = () => {
  return dispatch => {
    new TodosApi().getTodos()
      .then(res => dispatch( createAction(TODOS_GOT, { data: getDataFromResult(res) })))
      .catch(defaultErrorCatcher)
  }
}

// CLEAR FORM
export const clearTodoForm = () => createAction(TODOS_CLEAR_FORM)
// RETURN EDITING FORM TO INITIAL STATE
export const resetEditing = () => createAction(TODOS_RESET_EDITING)

// DELETE ONE
export const deleteTodo = (id, index) => (dispatch, getState) => {
  new TodosApi().deleteTodo(id)
    .then(res => {
      createNotification(true, successDeleteMessage())
      dispatch( createAction(TODOS_DELETED_ONE, { id, index } ))
    })
    .catch(defaultErrorCatcher)
}

export default {
  changeFormValue,
  clearTodoForm,
  deleteTodo,
  fetchTodoSingle,
  initTodosGetting,
  saveEditTodo,
  saveNewTodo,
  resetEditing,
}

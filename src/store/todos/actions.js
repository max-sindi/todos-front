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
} from './actionTypes'

const successCreateMessage = todoName => `Your todo ${todoName} was successfully created`
const successDeleteMessage = todoName => `Todo ${todoName} was successfully deleted`
const getDataFromResult = res => res.data

export const fetchTodoSingle = id => dispatch =>
  new TodosApi().getTodoSingle(id)
    .then( res => dispatch(
      createAction(TODOS_FETCH_SINGLE, { data: getDataFromResult(res) })
    ))
    .catch(defaultErrorCatcher)

export const saveEditTodo = () => (dispatch, getState) =>{
  // debugger
  const { id } = getState().todos.fetchedSingleTodo
  new TodosApi().saveEdit()
}

export const changeFormValue = ({ name, value }) => (
  createAction(TODOS_CHANGE_FORM_VALUE, { name, value })
)

export const saveCurrentTodo = () => {
  return (dispatch, getState) => {
    const todo = getFormData( getState().todos.form )

    new TodosApi().saveNewTodo(todo)
      .then( res => {
        dispatch( createNotification(true, successCreateMessage(res.title) ))
        dispatch( clearTodoForm() )
      })
      .catch(defaultErrorCatcher)
  }
}

export const initTodosGetting = () => {
  return dispatch => {
    new TodosApi().getTodos()
      .then(res => dispatch( createAction(TODOS_GOT, { data: getDataFromResult(res) })))
      .catch(defaultErrorCatcher)
  }
}

export const clearTodoForm = () => ( createAction(TODOS_CLEAR_FORM) )

export const deleteTodo = (id, index) => dispatch => {
  new TodosApi().deleteTodo(id)
    .then(res => {
      dispatch( createAction(TODOS_DELETED_ONE, { id, index } ))
      dispatch( createNotification(true, successDeleteMessage(res.title)))
    })
    .catch(defaultErrorCatcher)
}

export default {
  changeFormValue,
  saveCurrentTodo,
  clearTodoForm,
  initTodosGetting,
  deleteTodo,
}

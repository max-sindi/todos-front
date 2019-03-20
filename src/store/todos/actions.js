import { TodosApi } from 'api'
import { getFormData, createAction } from 'store/_utils'
import {
  createNotification,
  defaultErrorCatcher
} from '../notifications/actions'
import {
  TODOS_GOT,
  TODOS_CHANGE_FORM_VALUE,
  TODOS_CLEAR_FORM,
  TODOS_DELETED_ONE,
  TODOS_GET_SINGLE,
  TODOS_RESET_EDITING,
  TODOS_GET_MANY,
} from './actionTypes'

const successCreateMessage = todoName => `Your todo ${todoName} was successfully created`
const successDeleteMessage = (todoName = '') => `Todo ${todoName} was successfully deleted`
const successEditMessage = todoName => `Todo ${todoName} was successfully edited`
export const getDataFromResult = res => res.data

// GET MANY
export const initTodosGetting = () => createAction(TODOS_GET_MANY)
export const fetchTodoSingle = id => createAction(TODOS_GET_SINGLE, { id })

// FETCHING SINNGLE
  // new TodosApi().getTodoSingle(id)
  //   .then( res => dispatch(
  //     createAction(TODOS_FETCH_SINGLE, { data: getDataFromResult(res) })
  //   ))
  //   .catch(defaultErrorCatcher)
// }
// SAVE EDITED
//   const { todos } = getState()
//   const { id } = todos.fetchedSingleTodo
//   const dataToSend = getFormData(todos.form)
//
//   return new TodosApi().saveEdit(id, dataToSend)
//     .then(res =>
//       createNotification(true, successEditMessage( todos.form.title.value ))
//     )
//     .catch(defaultErrorCatcher)
// }
//

export const changeFormValue = (args) => createAction(args)
export const clearTodoForm = () => createAction()
export const resetEditing = () => createAction()
export const saveEditTodo = () => (dispatch, getState) => {}
export const saveNewTodo = () => (dispatch, getState) => {}
//
// // SAVE NEW
//   const todo = getFormData( getState().todos.form )
//
//   return new TodosApi().saveNewTodo(todo)
//     .then( res => {
//       createNotification(true, successCreateMessage(todo.title))
//       dispatch( clearTodoForm() )
//     })
//     .catch(defaultErrorCatcher)
// }
//
//
// // DELETE ONE
export const deleteTodo = (id, index) => (dispatch, getState) => {}
//   new TodosApi().deleteTodo(id)
//     .then(res => {
//       createNotification(true, successDeleteMessage())
//       dispatch( createAction(TODOS_DELETED_ONE, { id, index } ))
//     })
//     .catch(defaultErrorCatcher)
// }

export default {
  // changeFormValue,
  // clearTodoForm,
  // deleteTodo,
  // fetchTodoSingle,
  // initTodosGetting,
  // saveEditTodo,
  // saveNewTodo,
  // resetEditing,
}

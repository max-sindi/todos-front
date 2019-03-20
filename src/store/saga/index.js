import { put, all, takeLatest } from 'redux-saga/effects'
import { TodosApi } from 'api'
import { getDataFromResult } from '../todos/actions'
import { defaultErrorCatcher } from '../notifications/actions'
import { createAction } from '../_utils/'

import {
  // TODOS_CHANGE_FORM_VALUE,
  // TODOS_CLEAR_FORM,
  // TODOS_DELETED_ONE,
  // TODOS_RESET_EDITING,
  TODOS_GET_SINGLE,
  TODOS_GOT_SINGLE,
  TODOS_GOT,
  TODOS_GET_MANY,
} from '../todos/actionTypes'

function* getTodos() {
  try {
    const data = getDataFromResult( yield TodosApi.getTodos() )
    yield put( createAction(TODOS_GOT, { data }) )
  } catch(e) {
    defaultErrorCatcher(e)
  }
}

function* getSingleTodo(id) {
  try {
    const data = getDataFromResult( yield TodosApi.getTodoSingle() )
    yield put()
  } catch(e) {

  }
}

function* todos() {
  yield takeLatest(TODOS_GET_MANY, getTodos)
  yield takeLatest(TODOS_GET_SINGLE, getSingleTodo)
}

export default function* rootSaga() {
  yield all([
    todos(),
  ])
}

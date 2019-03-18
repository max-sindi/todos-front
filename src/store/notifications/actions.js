import {
  NOTIFICATIONS_NEW,
  NOTIFICATIONS_DESTROY_ONE,
} from './actionTypes'
import store from '../store'
import { createAction } from 'store/_utils'

const defaultFailureMessage = (msg) => `Something went wrong: ${msg}`

// ADD NEW
export const createNotification = (isTruly, message) => {
  store.dispatch( createAction(NOTIFICATIONS_NEW, { isTruly, message } ))
}

export const destroyNotification = index => createAction(NOTIFICATIONS_DESTROY_ONE, { index })

const withDefaultErrorMessage = err => (
  createNotification(false, defaultFailureMessage(err))
)

export const defaultErrorCatcher = err => withDefaultErrorMessage(err)

export default {
  createNotification,
  withDefaultErrorMessage,
}

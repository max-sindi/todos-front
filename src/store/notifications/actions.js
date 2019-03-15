import { NOTIFICATIONS_NEW } from './actionTypes'
const defaultFailureMessage = (msg) => `Something went wrong: ${msg}`

export const createNotification = (isTruly, message) => ({
  type: NOTIFICATIONS_NEW,
  payloads: {
    isTruly,
    message,
  }
})

export const withDefaultMessage = err => (
  createNotification(false, defaultFailureMessage(err))
)

export const defaultErrorCatcher = err => withDefaultMessage(err)

export default {
  createNotification,
  withDefaultMessage,
}

// import store from 'store'

export const NOTIFICATIONS_DESTROY_ONE = 'NOTIFICATIONS_DESTROY_ONE'
export const NOTIFICATIONS_NEW = 'NOTIFICATIONS_NEW'
export const destroyNotification = index => ({type: NOTIFICATIONS_DESTROY_ONE, payload: { index }})

// const defaultFailureMessage = (msg) => `Something went wrong: ${msg}`
//
// // ADD NEW
// export const createNotification = (isTruly, message) => {
//   store.dispatch( createAction(NOTIFICATIONS_NEW, { isTruly, message } ))
// }
//
//
// const withDefaultErrorMessage = err => (
//   createNotification(false, defaultFailureMessage(err))
// )
//
// export const defaultErrorCatcher = err => withDefaultErrorMessage(err)
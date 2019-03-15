import { NOTIFICATIONS_NEW } from './actionTypes'

const initialState = {
  notifications: [],
}

export default (state = initialState, action) => {
  const { type, payloads } = action

  switch(type) {
    case NOTIFICATIONS_NEW: {
      return {
        ...state,
        notifications: [
          ...state.notifications,
          payloads.notification
        ]
      }
    }

    default: return state
  }
}

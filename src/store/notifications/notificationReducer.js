import {
  NOTIFICATIONS_NEW,
  NOTIFICATIONS_DESTROY_ONE,
} from './actionTypes'
import uuid from 'uuid/v4'

const initialState = {
  notificationLifeDuration: 5000,
  /* each notification object example:
    {
      isTruly: Boolean,
      message: String,
      id: uuid String,
    }
  */
  currentNotifications: [
    {
      isTruly: false,
      message: "test dsadas",
      id: 1,
    },
    {
      isTruly: true,
      message: "tesasdasda dsadas",
      id: 2,
    },
  ],
}

export default (state = initialState, action) => {
  const { type, payloads } = action

  switch(type) {
    case NOTIFICATIONS_NEW: {
      return {
        ...state,
        currentNotifications: [
          ...state.currentNotifications,
          {
            ...payloads,
            id: uuid()
          }
        ]
      }
    }

    case NOTIFICATIONS_DESTROY_ONE: {
      const newNotifs = [].concat(state.currentNotifications)
      newNotifs.splice(payloads.index, 1)
      return {
        ...state,
        currentNotifications: newNotifs
      }
    }

    default: return state
  }
}

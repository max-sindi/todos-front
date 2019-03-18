import React from 'react'
import { NotifSuccess, NotifFaulire } from './styled'

const Types = {
  'true': NotifSuccess,
  'false': NotifFaulire,
}

const NotificationTypes = ({ isTruly, children }) => {
  const NotificationType = Types[ isTruly.toString() ]

  return (
    <NotificationType>
      {children}
    </NotificationType>
  )
}

export default NotificationTypes

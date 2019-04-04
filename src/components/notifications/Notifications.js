import React from 'react'
import { connect } from 'react-redux'
import Notification from './Notification'
import { StyledNotifsWrapper } from './styled'

const Notifications = ({ notifs }) => {
  return (
    <StyledNotifsWrapper>
      {notifs.map((item, index) =>
        <Notification {...item} key={item.id} index={index} />
      )}
    </StyledNotifsWrapper>
  )
}

export default connect(store => ({
  notifs: store.notifications.currentNotifications,
}))(Notifications)

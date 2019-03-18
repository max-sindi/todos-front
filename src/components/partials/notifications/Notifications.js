import React, { Component } from 'react'
import { connect } from 'react-redux'
import Notification from './Notification'
import { StyledNotifsWrapper } from './styled'

class Notifications extends Component {
  render() {
    return (
      <StyledNotifsWrapper>
        {this.props.notifs.map((item, index) =>
          <Notification {...item} key={item.id} index={index} />
        )}
      </StyledNotifsWrapper>
    )
  }
}

export default connect(store => ({
  notifs: store.notifications.currentNotifications
}))(Notifications)

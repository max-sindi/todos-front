import React, { Component } from 'react'
import { connect } from 'react-redux'
import { destroyNotification } from 'store/notifications/actions'
import NotificationType from './NotificationTypes'
import { DeleteButton, NotifWrapper } from './styled'
import LifeDurationDisplay from './LifeDurationDisplay'

class Notification extends Component {
  state = {
    timer: null,
  }

  componentDidMount() {
    const timer = setTimeout(this.destroyThisNotification, this.props.notificationLifeDuration)
    this.setState({ timer })
  }

  componentWillUnmount() {
    clearTimeout(this.state.timer)
  }

  destroyThisNotification = () => this.props.destroyNotification(this.props.index)

  render() {
    const { isTruly, message } = this.props
    return (
      <NotifWrapper>
        <NotificationType isTruly={isTruly}>
          <div>{message}</div>
        </NotificationType>
        <DeleteButton onClick={this.destroyThisNotification}>
          &#10005; {/* cross icon */}
        </DeleteButton>

        <LifeDurationDisplay />
      </NotifWrapper>
    )
  }
}

export default connect(
  store => ({
    notificationLifeDuration: store.notifications.notificationLifeDuration
  }),
  { destroyNotification })(Notification)

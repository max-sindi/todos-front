import React, { Component } from 'react'
import { connect } from 'react-redux'
import { destroyNotification } from 'store/notifications/notificationsActions'
import NotificationType from './NotificationTypes'
import { NotifWrapper, LifeDurationDisplayLayout } from './styled'
import { DeleteButton } from 'components/partials/'
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
    const { isTruly, message, notificationLifeDuration } = this.props
    return (
      <NotifWrapper duration={notificationLifeDuration}>
        <NotificationType isTruly={isTruly}>
          <div>{message}</div>
        </NotificationType>
        <DeleteButton onClick={this.destroyThisNotification}>
          &#10005; {/* cross icon */}
        </DeleteButton>
        <LifeDurationDisplayLayout>
          <LifeDurationDisplay />
        </LifeDurationDisplayLayout>
      </NotifWrapper>
    )
  }
}

export default connect(
  store => ({
    notificationLifeDuration: store.notifications.notificationLifeDuration
  }),
  { destroyNotification })(Notification)

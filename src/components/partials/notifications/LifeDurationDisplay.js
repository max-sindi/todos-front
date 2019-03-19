import React from 'react'
import { connect } from 'react-redux'
import { LifeDurationWrapper, LifeDurationInner } from './styled'


const LifeDurationDisplay = ({ lifeDuration }) => {
  return (
    <LifeDurationWrapper duration={lifeDuration}>
      <LifeDurationInner duration={lifeDuration}/>
    </LifeDurationWrapper>
  )
}

export default connect(
  store => ({
    lifeDuration: store.notifications.notificationLifeDuration
  }))(LifeDurationDisplay)

import React from 'react'
import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
`
const indicatorIncreasing = keyframes`
  from: radial-gradient(circle, red, yellow)
`
const Indicator = styled.div`
  background: linear-gradient
`

const LifeDurationDisplay = () => {
  return (
    <Wrapper>

    </Wrapper>
  )
}

export default LifeDurationDisplay

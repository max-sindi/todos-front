import React from 'react'
import { DeleteButtonStyled } from './styled'
import PropTypes from 'prop-types'

function DeleteButton({ clickHandler, children }) {
  return (
    <DeleteButtonStyled
      onClick={clickHandler || (() => console.warn('Nothing was passed as click handler'))}
    >
      {children || <span>&#10005;</span>} {/* cross icon */}
    </DeleteButtonStyled>
  )
}

DeleteButton.propTypes = {
  clickHandler: PropTypes.func
}

export default DeleteButton

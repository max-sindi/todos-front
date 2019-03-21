import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeFilterValue, clearFilter } from 'store/general/generalActions'
import { DeleteButton } from './'
import { Relative } from 'components/partials/styled'
import PropTypes from 'prop-types';

class Filter extends Component {
  componentWillUnmount() {
    this.props.clearFilter()
  }

  handleChange = e => {
    const { onChangeTrigger, changeFilterValue} = this.props
    changeFilterValue(e.target.value)
    onChangeTrigger ? onChangeTrigger() : console.warn('"onChangeTrigger" func not passed')
  }

  deleteClick = () => {
    this.props.clearFilter()
    this.props.shouldTriggerOnClear && this.props.onChangeTrigger()
  }

  render() {
    return (
      <Relative>
        <input
          onChange={this.handleChange}
          value={this.props.filterValue}
          style={{width: '100%'}}
        />
        <DeleteButton clickHandler={this.deleteClick} />
      </Relative>
    )
  }
}

Filter.propTypes = {
  onChangeTrigger: PropTypes.func,
  shouldClearTriggerChange: PropTypes.bool,
}

Filter.defaultProps = {
  shouldTriggerOnClear: true
}

export default connect(
  store => ({
    filterValue: store.general.filterValue
  }),
  {
    changeFilterValue,
    clearFilter
  }
)(Filter)

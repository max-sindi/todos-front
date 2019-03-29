import React from 'react';
import PropTypes from 'prop-types';
import Input from "components/partials/form/Input"
import {connect} from "react-redux"
import {changeSearchString, clearSearchString} from "store/search/searchActions"
import {Icon} from "antd"

class Search extends React.Component {
  static propTypes = {
    onChangeCb: PropTypes.func
  }

  componentWillUnmount() {
    this.props.clearSearchString()
  }

  onChangeHandler = (e) => {
    this.props.changeSearchString(e.target.value)
    this.callChangeCb()
  }

  clearSearch = () => {
    this.props.clearSearchString()
    this.callChangeCb()
  }

  callChangeCb = () => {
    const {onChangeCb} = this.props
    onChangeCb ? onChangeCb() : console.warn('onChangeCb not passed')
  }

  render() {
    const {searchString} = this.props
    return (
      <div>
        <Input
          value={searchString}
          onChange={this.onChangeHandler}
          prefix={<Icon type={"search"} />}
          suffix={<Icon type={"close"} onClick={this.clearSearch}/>}
        />
      </div>
    )
  }
}

export default connect(
  store => ({
    searchString: store.search.searchString
  }),
  {changeSearchString, clearSearchString}
)(Search);
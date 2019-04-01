import React from 'react';
import PropTypes from 'prop-types';
import Input from "components/partials/form/Input"
import {connect} from "react-redux"
import {changeSearchString, clearSearchString} from "store/search/searchActions"
import {Icon} from "antd"

Search.propTypes = {
  afterChangeAction : PropTypes.func
}

function Search({changeSearchString, clearSearchString, afterChangeAction, searchString}) {
  function onChangeHandler(e) {
    changeSearchString(e.target.value)
    callAfterChangeAction()
  }
  function clearSearch() {
    clearSearchString()
    callAfterChangeAction()
  }
  function callAfterChangeAction() {
    afterChangeAction ? afterChangeAction() : console.warn('afterChangeAction not passed')
  }

  return (
    <div>
      <Input
        value={searchString}
        onChange={onChangeHandler}
        prefix={<Icon type={"search"} />}
        suffix={<Icon type={"close"} onClick={clearSearch}/>}
      />
    </div>
  )
}

export default connect(
  store => ({
    searchString: store.search.searchString
  }),
  {changeSearchString, clearSearchString}
)(Search);
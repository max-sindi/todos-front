import React from 'react';
import PropTypes from 'prop-types';
import Input from "components/partials/form/Input"
import {connect} from "react-redux"
import {changeSearchString, clearSearchString} from "store/search/searchActions"
import {Icon} from "antd"


Search.propTypes = {
  onChangeCb: PropTypes.func
};

function Search({ searchString, changeSearchString, onChangeCb, clearSearchString }) {
  function onChangeHandler(e) {
    changeSearchString(e.target.value)
    callChangeCb()
  }

  function clearSearch() {
    clearSearchString()
    callChangeCb()
  }

  function callChangeCb() {
    onChangeCb ? onChangeCb() : console.warn('onChangeCb not passed')
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
  );
}

export default connect(
  store => ({
    searchString: store.search.searchString
  }),
  {changeSearchString, clearSearchString}
)(Search);
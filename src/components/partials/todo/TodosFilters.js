import React from 'react';
import {RadioGroup} from "components/partials/form/"
import {changeFilterByDone} from "store/todosFilters/todosFiltersActions"
import {connect} from "react-redux"
import Proptypes from "prop-types"



TodosFilters.propTypes = {
  // action which will be called after every filter change
  fetchAction: Proptypes.func,
  changeFilterByDone: Proptypes.func.isRequired,
}

function TodosFilters({value, changeFilterByDone, fetchAction}) {
  function changeHandler(e) {
    changeFilterByDone(e.target.value)
    fetchAction()
  }

  return (
    <div>
      <RadioGroup
        options={[
          {
            label: 'All',
            value: '',
          },
          {
            label: 'Done',
            value: 'true',
          },
          {
            label: 'In Progress',
            value: 'false',
          },
        ]}
        defaultValue={''}
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
}

export default connect(
  store => ({
    value: store.todosFilters.filterByDone
  }),
  {changeFilterByDone}
)(TodosFilters)
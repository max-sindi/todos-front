import React from 'react';
import {RadioGroup} from "components/partials/form/"
import {changeFilterByDone} from "store/todosFilters/todosFiltersActions"
import {connect} from "react-redux"


function TodosFilters({value, changeFilterByDone}) {
  function changeHandler(e) {
    changeFilterByDone(e.target.value)
  }

  return (
    <div>
      <RadioGroup
        options={[
          {
            label: 'All',
            value: 'all',
          },
          {
            label: 'Done',
            value: 'done',
          },
          {
            label: 'In Progress',
            value: 'notDone',
          },
        ]}
        defaultValue={'all'}
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
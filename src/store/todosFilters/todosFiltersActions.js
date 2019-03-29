export const types = {
  TODOS_FILTERS_CHANGE_BY_DONE: 'TODOS_FILTERS_CHANGE_BY_DONE'
}

// @param newFilterValue - String - name of field in filtersVariations object, which u can find in reducer
export const changeFilterByDone = (newFilterValue) => ({
  type: types.TODOS_FILTERS_CHANGE_BY_DONE,
  payload: newFilterValue
})
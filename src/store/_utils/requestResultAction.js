export default (entity, isSuccess, data) => {
  return {
    type: `${entity}_REQUEST_RESULT`,
    payload: {
      data,
    },
    meta: {
      success: isSuccess,
    }
  }
}

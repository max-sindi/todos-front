import _ from 'lodash'

export defautl const getDataFormForm = (form) => {
  const res = {}
  _.forEach(form, (val, key) => res[key] = val.value)
  return res
}

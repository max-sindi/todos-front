import _ from 'lodash'

export default (form) => {
  const res = {}
  _.forEach(form, (val, key) => res[key] = val.value)
  return res
}

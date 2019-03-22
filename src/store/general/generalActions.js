import {
  GENERAL_CHANGE_FILTER_VALUE,
  GENERAL_CLEAR_FILTER,
} from './actionTypes'
import { createAction as action } from '../_utils/'

export const changeFilterValue = value => action(GENERAL_CHANGE_FILTER_VALUE, { value })
export const clearFilter = () => action(GENERAL_CLEAR_FILTER)

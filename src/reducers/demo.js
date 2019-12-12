

import {LIST_REDUCER} from '../constant/reducer/namespace'
const SHOW_ALL={
  listResult:[]
}
 export default function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
      case LIST_REDUCER:
        return {
          ...state,
          listResult:action.payload.list
        }
      default:
        return state
    }
  }
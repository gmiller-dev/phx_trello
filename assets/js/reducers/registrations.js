import {REGISTRATIONS_ERROR} from '../constants'
const initialState = {
  errors: null
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case REGISTRATIONS_ERROR:
      return Object.assign({}, state, {errors: action.errors})
    default:
      return state
  }
}

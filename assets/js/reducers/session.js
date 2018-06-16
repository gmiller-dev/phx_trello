import {CURRENT_USER} from '../constants'
const initialState = {
  currentUser: null,
  socket: null,
  error: null
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.currentUser})
    default:
      return state
  }
}

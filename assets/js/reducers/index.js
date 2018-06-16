import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import session from './session'
import registration from './registrations'

export default combineReducers({
  routing: routerReducer,
  session,
  registration
})

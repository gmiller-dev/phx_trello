import {httpPost} from '../utils'
import Constants from '../constants'
import {push} from 'connected-react-router'

export const signUp = user => {
  return dispatch => {
    httpPost('api/v1/registrations', {user})
    .then(data => {
      window.localStorage.setItem('phxAuthToken', data.jwt)
      dispatch({
        type: Constants.CURRENT_USER,
        currentUser: data.user
      })
      dispatch(push('/'))
    })
    .catch(error => {
      error.response.json()
      .then(errorJson => {
        dispatch({
          type: Constants.REGISTRATIONS_ERROR,
          errors: errorJson.errors
        })
      })
    })
  }
}

export default {signUp}

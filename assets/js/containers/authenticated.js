import {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'connected-react-router'
import Constants from '../constants'

class Authenticated extends Component {
  componentDidMount () {
    const {dispatch} = this.props
    const authToken = window.localStorage.getItem('phxAuthToken')
    if (authToken) {
      dispatch({
        type: Constants.CURRENT_USER,
        currentUser: authToken
      })
    } else {
      dispatch(push('/sign_up'))
    }
  }
  render () {
    const {children} = this.props
    return children
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
})

export default connect(mapStateToProps)(Authenticated)

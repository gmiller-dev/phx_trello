import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setDocumentTitle, renderErrorsFor} from '../../utils'
import RegistrationActions from '../../actions/registrations'

class New extends Component {
  componentDidMount () {
    setDocumentTitle('Sign Up')
  }

  _handleSubmit (e) {
    e.preventDefault()
    const {dispatch} = this.props
    const data = {
      first_name: this.refs.firstName.value,
      last_name: this.refs.lastName.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
      password_confirmation: this.refs.passwordConfirmation.value
    }
    dispatch(RegistrationActions.signUp(data))
  }

  render () {
    const {errors} = this.props
    return (
      <div className='view-container registrations new'>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <div className='field'>
            <input ref='firstName' type='text' placeholder='First name' required />
            {renderErrorsFor(errors, 'first_name')}
          </div>
          <div className='field'>
            <input ref='lastName' type='text' placeholder='Last name' required />
            {renderErrorsFor(errors, 'last_name')}
          </div>
          <div className='field'>
            <input ref='email' type='email' placeholder='Email' required />
            {renderErrorsFor(errors, 'email')}
          </div>
          <div className='field'>
            <input ref='password' type='password' placeholder='Password' required />
            {renderErrorsFor(errors, 'password')}
          </div>
          <div className='field'>
            <input ref='passwordConfirmation' type='password' placeholder='Confirm password' required />
            {renderErrorsFor(errors, 'password_confirmation')}
          </div>
          <button type='submit'>Sign up</button>
        </form>
        <Link to='/sign_in'>Sign in</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  errors: state.registration.errors
})
export default connect(mapStateToProps)(New)

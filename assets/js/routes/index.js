import {Route} from 'react-router'
import React from 'react'
import propTypes from 'prop-types'

import AuthenticatedContainer from '../containers/authenticated'

import RegistrationsNew from '../views/registrations/new'
import HomeIndexView from '../views/home'
import SessionsNew from '../views/sessions/new'
import BoardsShowView from '../views/boards/show'

const Routes = ({layout}) => {
  const Layout = layout

  return (
    <Layout>
      <Route path='/sign_up' component={RegistrationsNew} />
      <Route path='/sign_in' component={SessionsNew} />

      <AuthenticatedContainer>
        <Route exact path='/' component={HomeIndexView} />
        <Route path='/boards/:id' component={BoardsShowView} />
      </AuthenticatedContainer >
    </Layout>
  )
}
Routes.propTypes = {
  layout: propTypes.func.isRequired
}

export default Routes

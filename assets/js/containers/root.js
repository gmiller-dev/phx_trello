import React from 'react'
import PropTypes from 'prop-types'
import {ConnectedRouter} from 'connected-react-router'
import {Provider} from 'react-redux'
import invariant from 'invariant'
import Routes from '../routes'
import MainLayout from '../layouts/main'

const propTypes = {
  routerHistory: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}
const Root = ({routerHistory, store}) => {
  invariant(
    routerHistory,
    '<Root /> needs either a routingContext or routerHistory to render.'
  )

  return (
    <Provider store={store}>
      <ConnectedRouter history={routerHistory}>
        <Routes layout={MainLayout} store={store} />
      </ConnectedRouter>
    </Provider>
  )
}

Root.propTypes = propTypes
export default Root

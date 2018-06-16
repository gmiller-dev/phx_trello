import {createStore, applyMiddleware, compose} from 'redux'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import {createLogger} from 'redux-logger'
import thunkMiddleWare from 'redux-thunk'
import invariant from 'invariant'

export default function configureStore ({reducers, browserHistory, loggerConfig = {level: 'info', collapsed: true}} = {}) {
  invariant(typeof reducers === 'function', 'configureStore: reducers parameter must be a function')
  invariant(browserHistory !== undefined, 'browserHistory parameter can not be undefined')

  const loggerMiddleware = createLogger(loggerConfig)
  return createStore(
    connectRouter(browserHistory)(reducers),
    {},
    compose(
      applyMiddleware(
        routerMiddleware(browserHistory),
        thunkMiddleWare,
        loggerMiddleware
      )
    )
  )
}

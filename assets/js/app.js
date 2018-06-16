import 'phoenix_html'
import '../scss/style.scss'
import React from 'react'

import {createBrowserHistory} from 'history'

import DOM from 'react-dom'

import configureStore from './store'
import reducers from './reducers'
import Root from './containers/root'

const browserHistory = createBrowserHistory()
const store = configureStore({
  reducers,
  browserHistory
})

const target = window.document.getElementById('main_container')

const node = <Root routerHistory={browserHistory} store={store} />
DOM.render(node, target)

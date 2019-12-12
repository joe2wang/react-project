import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import configureStore from './store'
import { createBrowserHistory } from 'history'

import * as serviceWorker from './serviceWorker'
import  './mock/demo'
const browser = createBrowserHistory()

const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <Router history={browser}>
      <App />
    </Router>
  </Provider>,

  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

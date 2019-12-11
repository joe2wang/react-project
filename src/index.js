import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'
import { routes } from './router'
import store from './store'
// routes={routes}
import * as serviceWorker from './serviceWorker'
const browser = createBrowserHistory()
ReactDOM.render(
  <Provider store={store}>
    <Router history={browser}>
      <Route path='/' component={App} />
    </Router>
  </Provider>,

  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

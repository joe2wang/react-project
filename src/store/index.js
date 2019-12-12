import todoApp from '../reducers'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import allSaga from '../sagas'

function configureStore () {
  // 注意：必须满足 redux@>=3.1.0 才可以将 middleware 作为 createStore 的最后一个参数传递
  const sagaMiddleware = createSagaMiddleware()
 
  let store = createStore(
    todoApp,
    applyMiddleware(/* 其它 middleware, */ sagaMiddleware)
  )
  sagaMiddleware.run(allSaga)
  return store
}

export default configureStore

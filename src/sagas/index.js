import listSagas from './list'
import { all } from 'redux-saga/effects'
export default function * allSaga () {
  yield all([...listSagas()])
}

// const myIO = {
//   subscribe: {

//   }, // this will be used to resolve take Effects
//   dispatch: {

//   },  // this will be used to resolve put Effects
//   getState: {

//   },  // this will be used to resolve select Effects
// }

// runSaga(
//   myIO,
//   allSagas,
// )

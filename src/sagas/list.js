import { call, takeEvery,put } from 'redux-saga/effects'
import { getList } from '../services/list'
import { GET_LIST_ACTION } from '../constant/action/namespace'
import { LIST_REDUCER } from '../constant/reducer/namespace'
function * listSaga () {
 try{
    let resp = yield call(getList, {})
    yield put({
        type:LIST_REDUCER,
        payload:resp
    })
 }catch(e){
     console.log(e)
 }
}
export default function listSagas () {
  return [takeEvery(GET_LIST_ACTION, listSaga)]
}

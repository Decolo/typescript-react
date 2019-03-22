import { Action } from '../../../../declartion'
import { put, takeLatest, call } from 'redux-saga/effects'
import { 
  REQUEST_USER_INFO,
  doReceiveUserInfo,
  REQUEST_DELETE_USER,
  doFinishDeleteUser
} from '../../../../action'
import { fetch, api } from '../../../../api'

function* fetchUserInfoAsync(action: Action) {
  const params = {
    ...api['fetchUserList'],
    data: {
      info: JSON.stringify(action.payload)
    }
  }

  const res = yield call(fetch, params)
  
  const { code, msg, ...data } = res
  yield put(doReceiveUserInfo(data))
}

function* deleteUserAsync(action: Action) {
  const { payload } = action 
  const params = {
    ...api['deleteUser'],
    data: {
      info: JSON.stringify({
        ids: payload.length ? payload.join(',') : payload.toString()
      })
    }
  }
  yield call(fetch, params)
  yield put(doFinishDeleteUser())
}

export function* watchFetchUserInfo() {
  yield takeLatest(REQUEST_USER_INFO, fetchUserInfoAsync)
}

export function* watchDeleteUser() {
  yield takeLatest(REQUEST_DELETE_USER, deleteUserAsync)
}
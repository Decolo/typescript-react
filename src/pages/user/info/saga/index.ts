import { Action } from '../../../../declartion'
import { put, takeLatest, call } from 'redux-saga/effects'
import { FETCH_USER_INFO, doReceiveUserInfo } from '../../../../action'
import { fetch, api } from '../../../../api'

function* fetchUserInfoAsync(action: Action) {
  const params = {
    ...api['fetchUserList'],
    data: {
      info: JSON.stringify(action.payload)
    }
  }

  const res = yield call(fetch, params)
  console.log(res)
}

export function* watchFetchUserInfo() {
  yield takeLatest(FETCH_USER_INFO, fetchUserInfoAsync)
}


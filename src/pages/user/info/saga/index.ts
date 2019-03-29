import { Action } from 'declaration/index'
import { put, takeLatest, call } from 'redux-saga/effects'
import { 
  REQUEST_USER_INFO,
  doReceiveUserInfo,
  REQUEST_DELETE_USER,
  doFinishDeleteUser,
  doToggleUserInfoDeleteMd,
  REQUEST_EDIT_USER,
  doFinishEditUser,
  doToggleUserInfoUpdateMd,
  REQUEST_ADD_USER,
  doFinishAddUser
} from 'action/index'
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
  yield put(doToggleUserInfoDeleteMd(null))
}

function* editUserAsync(action: Action) {
  const params = {
    ...api['editUser'],
    data: {
      info: JSON.stringify(action.payload)
    }
  }
  yield call(fetch, params)
  yield put(doFinishEditUser())
  yield put(doToggleUserInfoUpdateMd({}))
}

function* addUserAsync(action: Action) {
  const params = {
    ...api['addUser'],
    data: {
      info: JSON.stringify(action.payload)
    }
  }
  yield call(fetch, params)
  yield put(doFinishEditUser())
  yield put(doToggleUserInfoUpdateMd({}))
}

export function* watchFetchUserInfo() {
  yield takeLatest(REQUEST_USER_INFO, fetchUserInfoAsync)
}

export function* watchDeleteUser() {
  yield takeLatest(REQUEST_DELETE_USER, deleteUserAsync)
}

export function* watchAddUser() {
  yield takeLatest(REQUEST_ADD_USER, addUserAsync)
}

export function* watchEditUser() {
  yield takeLatest(REQUEST_EDIT_USER, editUserAsync)
}
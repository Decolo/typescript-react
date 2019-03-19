import { put, takeEvery, call, all } from 'redux-saga/effects';
import { LOGIN, doLogined } from '../action'
import { fetch, api } from '../api'

type Action = {
  type: String,
  payload: any
}

function* login(action: Action) {
  const params = {
    data: {
      info: JSON.stringify(action.payload)
    },
    ...api.login
  }

  const json = yield call(fetch, params)
  if (!json) {
    return
  }

  yield put(doLogined(json))
}

function* watchLogin() {
  yield takeEvery(LOGIN, login)
}

export default function* rootSaga() {
  yield all([watchLogin()])
}
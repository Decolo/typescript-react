import { all } from 'redux-saga/effects';
import { watchFetchUserInfo } from '../pages/user/info/saga'

export default function* rootSaga() {
  yield all([watchFetchUserInfo()])
}
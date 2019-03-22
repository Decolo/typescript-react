import { all } from 'redux-saga/effects';
import { watchFetchUserInfo, watchDeleteUser } from '../pages/user/info/saga'

export default function* rootSaga() {
  yield all([watchFetchUserInfo(), watchDeleteUser()])
}
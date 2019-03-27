import { all } from 'redux-saga/effects';
import { watchAddUser, watchFetchUserInfo, watchDeleteUser, watchEditUser } from '../pages/user/info/saga'

export default function* rootSaga() {
  yield all([
    watchAddUser(),
    watchDeleteUser(), 
    watchEditUser(),
    watchFetchUserInfo()
  ])
}
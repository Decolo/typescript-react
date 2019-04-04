import { all } from 'redux-saga/effects';
import { watchAddUser, watchFetchUserInfo, watchDeleteUser, watchEditUser } from 'pages/user/info/saga'
import { 
  watchFetchDemandList, 
  watchAddDemand, watchChangeOperator, 
  watchDeleteDemand,
  watchResetDemand,
  watchfetchNetProperties,
  watchAddNetstation
} from 'pages/collection/demand/list/saga'

export default function* rootSaga() {
  yield all([
    watchFetchDemandList(),
    watchAddUser(),
    watchDeleteUser(), 
    watchEditUser(),
    watchFetchUserInfo(),
    watchAddDemand(),
    watchChangeOperator(),
    watchDeleteDemand(),
    watchResetDemand(),
    watchfetchNetProperties(),
    watchAddNetstation()
  ])
}
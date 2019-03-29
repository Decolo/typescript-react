import { Action } from 'declaration/index'
import { put, takeLatest, call } from 'redux-saga/effects'
import { fetch, api } from 'api/index'
import { REQUEST_DEMAND_LIST, doReceiveDemandList } from 'action/index'

function* fetchDemandListAsync(action: Action) {
  const _params = api['fetchDemandList']
  _params.url = _params.url + action.payload.ticket
  delete action.payload 

  const params = {
    ..._params,
    data: {
      info: JSON.stringify(action.payload)
    }
  }
  const json = yield call(fetch, params)
  console.log(json)
  yield put(doReceiveDemandList(json))
}

export function* watchFetchDemandList() {
  yield takeLatest(REQUEST_DEMAND_LIST, fetchDemandListAsync)
}



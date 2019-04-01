import { Action } from 'declaration/index'
import { put, takeLatest, call } from 'redux-saga/effects'
import { fetch, api } from 'api/index'
import { 
  REQUEST_DEMAND_LIST, 
  doReceiveDemandList, 
  RESET_DEMAND,
  doRequestDemandList,
  DELETE_DEMAND
} from 'action/index'

function* fetchDemandListAsync(action: Action) {
  const _params = api['fetchDemandList']
  _params.url = _params.url.replace('netStation', action.payload.netStation)
  delete action.payload.netStation

  const params = {
    ..._params,
    data: {
      info: JSON.stringify(action.payload)
    }
  }
  const json = yield call(fetch, params)
  yield put(doReceiveDemandList(json))
}

function* resetDemandAsync(action: Action) {
  const _params = api['setDemand']
  const { id, pagination, netStation } = action.payload
  _params.url = _params.url.replace('netStation', netStation)

  const params = {
    ..._params,
    data: {
      info: JSON.stringify({
        id
      })
    }
  }

  yield call(fetch, params)
  yield put(doRequestDemandList({
    page: pagination.current,
    size: pagination.size,
    netStation
  }))
}

function* deleteDemand(action: Action) {
  const _params = api['deleteDemand']
  const { id, pagination, netStation } = action.payload
  _params.url = _params.url.replace('netStation', netStation)

  const params = {
    ..._params,
    data: {
      info: JSON.stringify({
        id
      })
    }
  }

  yield call(fetch, params)
  yield put(doRequestDemandList({
    page: pagination.current,
    size: pagination.size,
    netStation
  }))
}


export function* watchResetDemand() {
  yield takeLatest(RESET_DEMAND, resetDemandAsync)
}

export function* watchFetchDemandList() {
  yield takeLatest(REQUEST_DEMAND_LIST, fetchDemandListAsync)
}

export function* watchDeleteDemand() {
  yield takeLatest(DELETE_DEMAND, deleteDemand)
}
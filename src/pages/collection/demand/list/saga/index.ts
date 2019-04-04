import { Action } from 'declaration/index'
import { put, takeLatest, call } from 'redux-saga/effects'
import { fetch, api } from 'api/index'
import { 
  REQUEST_DEMAND_LIST, 
  doReceiveDemandList, 
  RESET_DEMAND,
  doRequestDemandList,
  DELETE_DEMAND,
  CHANGE_OPERATOR,
  REQUEST_ADD_DEMAND,
  doFinishAddDemand,
  doToggleDemandDeleteMd,
  doChangeAddStep,
  FETCH_NET_PROPERTIES,
  dofetchNetProperties,
  doReceiveNetProperties,
  doFinishAddNetStation,
  REQUEST_ADD_NETSTATION
} from 'action/index'

function* fetchDemandListAsync(action: Action) {
  const _params = api['fetchDemandList']
  _params.url = _params.url.replace('netStation', action.payload.netStation)
  delete action.payload.netStation

  const params = {
    ..._params,
    data: {
      ...action.payload
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
    data: { id }
  }

  yield call(fetch, params)
  yield put(doRequestDemandList({
    page: pagination.current,
    size: pagination.size,
    netStation
  }))
}

function* deleteDemandAsync(action: Action) {
  const _params = api['deleteDemand']
  const { deleteId, pagination, netStation } = action.payload
  _params.url = _params.url.replace('netStation', netStation)

  const params = {
    ..._params,
    data: { ids: deleteId }
  }

  yield call(fetch, params)
  yield put(doToggleDemandDeleteMd(null))
  yield put(doRequestDemandList({
    page: pagination.current,
    size: pagination.size,
    netStation
  }))
}

function* changeOperatorAsync(action: Action) {
  const { demandId, operatorId, netStation } = action.payload
  const _params = api['changeOperator']
  _params.url = _params.url.replace('netStation', netStation)

  const params = {
    ..._params,
    data: {
      info: JSON.stringify({
        tid: demandId,
        operator: operatorId
      })
    }
  }

  yield call(fetch, params)
}

function* addDemandAsync(action: Action) {
  const { netStation, addStep, ...data } = action.payload
  const _params = api['addDemand']
  _params.url = _params.url.replace('netStation', netStation)

  const params = {
    ..._params,
    data: data
  }
  
  const json = yield call(fetch, params)
  // 返回新添加的需求的id
  yield put(doFinishAddDemand(json.id))
  yield put(doChangeAddStep(addStep + 1))
  yield put(dofetchNetProperties(netStation))
}

function* fetchNetProperties(action: Action) {
  const _params = api['fetchNetProperties']
  _params.url = _params.url.replace('netStation', action.payload.netStation)

  const params = _params
  const json = yield call(fetch, params)
  yield put(doReceiveNetProperties(json.result))
}

function* addNetStationAsync(action: Action) {
  const { netStation, ...data } = action.payload
  const _params = api['addNetStation']
  _params.url = _params.url.replace('netStation', netStation)
  
  const params = {
    ..._params,
    data: data
  }
  const json = yield call(fetch, params)
  yield put(doFinishAddNetStation(json.id))
}

export function* watchAddNetstation() {
  yield takeLatest(REQUEST_ADD_NETSTATION, addNetStationAsync)
}

export function* watchfetchNetProperties() {
  yield takeLatest(FETCH_NET_PROPERTIES, fetchNetProperties)
}

export function* watchResetDemand() {
  yield takeLatest(RESET_DEMAND, resetDemandAsync)
}

export function* watchFetchDemandList() {
  yield takeLatest(REQUEST_DEMAND_LIST, fetchDemandListAsync)
}

export function* watchDeleteDemand() {
  yield takeLatest(DELETE_DEMAND, deleteDemandAsync)
}

export function* watchChangeOperator() {
  yield takeLatest(CHANGE_OPERATOR, changeOperatorAsync)
}

export function* watchAddDemand() {
  yield takeLatest(REQUEST_ADD_DEMAND, addDemandAsync)
}
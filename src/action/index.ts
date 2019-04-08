import { createAction } from 'redux-actions'
import { Action } from 'declaration/index'

const CHANGE_DEMAND_NETSTATION = 'CHANGE_DEMAND_NETSTATION'
const doChangeDemandNetStation = createAction(CHANGE_DEMAND_NETSTATION)

const FETCH_NET_PROPERTIES = 'FETCH_NET_PROPERTIES'
const doFetchNetProperties = createAction(FETCH_NET_PROPERTIES)

const RECEIVE_NET_PROPERTIES = 'RECEIVE_NET_PROPERTIES'
const doReceiveNetProperties = createAction(RECEIVE_NET_PROPERTIES)

const FETCH_CHANNEL_PROPERTIES = 'FETCH_CHANNEL_PROPERTIES'
const doChannelProperties = createAction(FETCH_CHANNEL_PROPERTIES)

const RECEIVE_CHANNEL_PROPERTIES = 'RECEIVE_CHANNEL_PROPERTIES'
const doReceiveChannelProperties = createAction(RECEIVE_CHANNEL_PROPERTIES)

const CHANGE_ADD_STEP = 'CHANGE_ADD_STEP'
const doChangeAddStep = createAction(CHANGE_ADD_STEP)

const REQUEST_DEMAND_LIST = 'REQUEST_DEMAND_LIST'
const doRequestDemandList = createAction(REQUEST_DEMAND_LIST)

const RECEIVE_DEMAND_LIST = 'RECEIVE_DEMAND_LIST'
const doReceiveDemandList = createAction(RECEIVE_DEMAND_LIST)

const REQUEST_ADD_DEMAND = 'REQUEST_ADD_DEMAND'
const doRequestAddDemand = createAction(REQUEST_ADD_DEMAND)

const FINISH_ADD_DEMAND = 'FINISH_ADD_DEMAND'
const doFinishAddDemand = createAction(FINISH_ADD_DEMAND)

const REQUEST_ADD_NETSTATION = 'REQUEST_ADD_NETSTATION'
const doRequestAddNetStation = createAction(REQUEST_ADD_NETSTATION)

const FINISH_ADD_NETSTATION = 'FINISH_ADD_NETSTATION'
const doFinishAddNetStation = createAction(FINISH_ADD_NETSTATION)

const REQUEST_ADD_CHANNEL = 'REQUEST_ADD_CHANNEL'
const doRequestAddChannel = createAction(REQUEST_ADD_CHANNEL)

const RESET_DEMAND = 'RESET_DEMAND'
const doResetDemand = createAction(RESET_DEMAND)

const CHANGE_OPERATOR = 'CHANGE_OPERATOR'
const doChangeOperator = createAction(CHANGE_OPERATOR)

const DELETE_DEMAND = 'DELETE_DEMAND'
const doDeleteDemand = createAction(DELETE_DEMAND)

const TOGGLE_DEMAND_UPDATE_MD = 'TOGGLE_DEMAND_UPDATE_MD'
const doToggleDemandUpdateMd: ({}) => Action = createAction(TOGGLE_DEMAND_UPDATE_MD)

const TOGGLE_DEMAND_DELETE_MD = 'TOGGLE_DEMAND_DELETE_MD'
const doToggleDemandDeleteMd: (id: number | null) => Action = createAction(TOGGLE_DEMAND_DELETE_MD)

const REQUEST_USER_INFO = 'REQUEST_USER_INFO'
const doRequestUserInfo = createAction(REQUEST_USER_INFO)

const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO'
const doReceiveUserInfo = createAction(RECEIVE_USER_INFO)

const REQUEST_ADD_USER = 'REQUEST_ADD_USER'
const doRequestAddUser = createAction(REQUEST_ADD_USER)

const FINISH_ADD_USER = 'FINISH_ADD_USER'
const doFinishAddUser = createAction(FINISH_ADD_USER)

const REQUEST_DELETE_USER = 'REQUEST_DELETE_USER'
const doRequestDeleteUser = createAction(REQUEST_DELETE_USER)

const FINISH_DELETE_USER = 'FINISH_DELETE_USER'
const doFinishDeleteUser = createAction(FINISH_DELETE_USER)

const REQUEST_EDIT_USER = 'REQUEST_EDIT_USER'
const doRequestEditUser = createAction(REQUEST_EDIT_USER)

const FINISH_EDIT_USER = 'FINISH_EDIT_USER'
const doFinishEditUser = createAction(FINISH_EDIT_USER)

const TOGGLE_USER_INFO_UPDATE_MD = 'TOGGLE_USER_INFO_UPDATE_MD'
const doToggleUserInfoUpdateMd: ({}) => Action = createAction(TOGGLE_USER_INFO_UPDATE_MD)

const TOGGLE_USER_INFO_DELETE_MD = 'TOGGLE_USER_INFO_DELETE_MD'
const doToggleUserInfoDeleteMd: (id: number | null) => Action = createAction(TOGGLE_USER_INFO_DELETE_MD)

export {
  CHANGE_DEMAND_NETSTATION,
  doChangeDemandNetStation,
  REQUEST_DEMAND_LIST,
  doRequestDemandList,
  RECEIVE_DEMAND_LIST,
  doReceiveDemandList,
  RESET_DEMAND,
  doResetDemand,
  DELETE_DEMAND,
  doDeleteDemand,
  TOGGLE_DEMAND_UPDATE_MD,
  doToggleDemandUpdateMd,
  TOGGLE_DEMAND_DELETE_MD,
  doToggleDemandDeleteMd,
  CHANGE_OPERATOR,
  doChangeOperator,
  REQUEST_ADD_DEMAND,
  doRequestAddDemand,
  FINISH_ADD_DEMAND,
  doFinishAddDemand,
  CHANGE_ADD_STEP,
  doChangeAddStep,
  FETCH_NET_PROPERTIES,
  doFetchNetProperties,
  RECEIVE_NET_PROPERTIES,
  doReceiveNetProperties,
  REQUEST_ADD_NETSTATION,
  doRequestAddNetStation,
  FINISH_ADD_NETSTATION,
  doFinishAddNetStation,
  RECEIVE_CHANNEL_PROPERTIES,
  doReceiveChannelProperties,
  FETCH_CHANNEL_PROPERTIES,
  doChannelProperties,
  REQUEST_ADD_CHANNEL,
  doRequestAddChannel,
  
  REQUEST_USER_INFO,
  doRequestUserInfo,
  RECEIVE_USER_INFO,
  doReceiveUserInfo,
  REQUEST_ADD_USER,
  doRequestAddUser,
  FINISH_ADD_USER,
  doFinishAddUser,
  REQUEST_DELETE_USER,
  doRequestDeleteUser,
  FINISH_DELETE_USER,
  doFinishDeleteUser,
  REQUEST_EDIT_USER,
  doRequestEditUser,
  FINISH_EDIT_USER,
  doFinishEditUser,
  TOGGLE_USER_INFO_UPDATE_MD,
  doToggleUserInfoUpdateMd,
  TOGGLE_USER_INFO_DELETE_MD,
  doToggleUserInfoDeleteMd
}
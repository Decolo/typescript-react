import { createAction } from 'redux-actions'
import { Action } from '../declartion'

const REQUEST_TICKET = 'REQUEST_TICKET'
const doRequestTicket = createAction(REQUEST_TICKET)

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
  REQUEST_TICKET,
  doRequestTicket,
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
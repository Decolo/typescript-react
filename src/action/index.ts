import { createAction } from 'redux-actions'

const REQUEST_USER_INFO = 'REQUEST_USER_INFO'
const doRequestUserInfo = createAction(REQUEST_USER_INFO)
const FETCH_USER_INFO = 'FETCH_USER_INFO'
const doFetchUserInfo = createAction(FETCH_USER_INFO)
const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO'
const doReceiveUserInfo = createAction(RECEIVE_USER_INFO)

export {
  REQUEST_USER_INFO,
  doRequestUserInfo,
  FETCH_USER_INFO,
  doFetchUserInfo,
  RECEIVE_USER_INFO,
  doReceiveUserInfo
}
import { createAction } from 'redux-actions'

type Action = {
  type: String,
  payload?: any
}
type actionFunction = (payload: any) => Action

const LOGIN = 'LOGIN'
const doLogin:actionFunction = createAction(LOGIN)
const LOGINED = 'LOGINED'
const doLogined: actionFunction = createAction(LOGINED)

export {
  LOGIN,
  doLogin,
  LOGINED,
  doLogined
}
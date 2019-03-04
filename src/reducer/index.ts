import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import sha256 from 'sha256'
import { LOGIN, LOGINED } from '../action'

type LoginState = {
  account: String,
  allow: Number,
  timestamp: String,
  token: String,
  isLogin: Boolean
}

const loginState = handleActions({
  [LOGIN]: (state: LoginState | undefined) => state,
  [LOGINED]: (state: LoginState | undefined, action: {
    payload?: any
  }) => {
    const { account, allow, token } = action.payload 
    const timestamp = Date.now() + ''
    return {
      ...state,
      account,
      allow,
      timestamp,
      token: sha256('' + token + timestamp + account + '53cR29cMA2H*IrEKI'),
      isLogin: true
    }
  }
}, {
  allow: 0,
  account: '',
  timestamp: '',
  token: '',
  isLogin: false
})

const rootReducer = combineReducers({
  loginState
})

export default rootReducer
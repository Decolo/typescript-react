import { combineReducers } from 'redux'
import userInfo from 'pages/user/info/reducer'
import collectionDemand from '@/pages/collection/demand/list'

const rootReducer = combineReducers({
  userInfo
})

export default rootReducer
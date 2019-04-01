import { combineReducers } from 'redux'
import userInfo from 'pages/user/info/reducer'
import collectionDemand from '@/pages/collection/demand/list/reducer'

const rootReducer = combineReducers({
  userInfo,
  collectionDemand
})

export default rootReducer
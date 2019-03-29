import { handleActions } from 'redux-actions' 
import { 
  REQUEST_DEMAND_LIST,
  RECEIVE_DEMAND_LIST 
} from 'action/index'
import { Action } from 'declaration/index'

export interface State {
  loading: boolean,
  demandList: Array<any>,
  pagination: {
    current: number,
    pageSize: number,
    total: number
  }
}

const collectionDemand = handleActions({
  [REQUEST_DEMAND_LIST]: (state: State) => ({
    ...state,
    loading: true
  }),
  [RECEIVE_DEMAND_LIST]: (state: State, action: Action) => {
    const { result, summary } = action.payload
    return {
      ...state,
      loading: false,
      demandList: result
    } 
  }
}, {
  loading: false,
  demandList: [],
  pagination: {
    current: 1,
    pageSize: 10,
    total: 0
  }
})

export default collectionDemand
import { handleActions } from 'redux-actions' 
import { 
  REQUEST_DEMAND_LIST,
  RECEIVE_DEMAND_LIST,
  CHANGE_DEMAND_NETSTATION,
  TOGGLE_DEMAND_UPDATE_MD
} from 'action/index'
import { Action } from 'declaration/index'

export interface State {
  loading: boolean,
  demandList: Array<any>,
  pagination: {
    current: number,
    pageSize: number,
    total: number
  },
  netStation: string
}

const collectionDemand = handleActions({
  [REQUEST_DEMAND_LIST]: (state: any) => ({
    ...state,
    loading: true
  }),
  [RECEIVE_DEMAND_LIST]: (state: any, action: Action) => {
    const { result, summary } = action.payload
    return {
      ...state,
      loading: false,
      demandList: result
    } 
  },
  [CHANGE_DEMAND_NETSTATION]: (state: any, action: Action) => ({
    ...state,
    netStation: action.payload
  }),
  [TOGGLE_DEMAND_UPDATE_MD]: (state: any) => {
    return {
      ...state,
      updateMdVisible: !state.updateMdVisible,
    }
  }
}, {
  updateMdVisible: false,
  netStation: 'website',
  loading: false,
  demandList: [],
  pagination: {
    current: 1,
    pageSize: 10,
    total: 0
  }
})

export default collectionDemand
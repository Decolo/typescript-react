import { handleActions } from 'redux-actions' 
import { 
  REQUEST_DEMAND_LIST,
  RECEIVE_DEMAND_LIST,
  CHANGE_DEMAND_NETSTATION,
  TOGGLE_DEMAND_UPDATE_MD,
  TOGGLE_DEMAND_DELETE_MD,
  REQUEST_ADD_DEMAND,
  FINISH_ADD_DEMAND,
  CHANGE_ADD_STEP,
  RECEIVE_NET_PROPERTIES
} from 'action/index'
import { Action } from 'declaration/index'

export interface State {
  tableLoading: boolean,
  demandList: Array<any>,
  pagination: {
    current: number,
    pageSize: number,
    total: number
  },
  netStation: string,
  deleteMdVisible: boolean,
  deleteCfLoading: boolean,
  deleteId: number | null,
  addDemandLoding?: boolean,
  addStep?: number,
  netProperties?: Array<any>,
  addNetLoading?: boolean
}

const collectionDemand = handleActions({
  [REQUEST_DEMAND_LIST]: (state: any) => ({
    ...state,
    loading: true
  }),
  [CHANGE_ADD_STEP]: (state: any, action: Action) => {
    return {
      ...state,
      addStep: action.payload
    }
  },
  [REQUEST_ADD_DEMAND]: (state: any) => ({
    ...state,
    addDemandLoding: true
  }),
  [FINISH_ADD_DEMAND]: (state: any) => ({
    ...state,
    addDemandLoding: false
  }),
  [RECEIVE_DEMAND_LIST]: (state: any, action: Action) => {
    const { result, page, size, total } = action.payload
    return {
      ...state,
      loading: false,
      demandList: result,
      pagination: {
        current: page,
        pageSize: size,
        total
      }
    } 
  },
  [CHANGE_DEMAND_NETSTATION]: (state: any, action: Action) => ({
    ...state,
    netStation: action.payload
  }),
  [TOGGLE_DEMAND_UPDATE_MD]: (state: any, action: Action) => ({
    ...state,
    updateMdVisible: !state.updateMdVisible,
    record: action.payload
  }),
  [TOGGLE_DEMAND_DELETE_MD]: (state: any, action: Action) => ({
    ...state,
    deleteMdVisible: !state.deleteMdVisible,
    deleteId: action.payload
  }),
  [RECEIVE_NET_PROPERTIES]: (state: any, action: Action) => ({
    ...state,
    netProperties: action.payload
  })
}, {
  netStation: 'website',
  updateMdVisible: false,
  record: {},
  deleteId: null,
  deleteMdVisible: false,
  demandList: [],
  pagination: {
    current: 1,
    pageSize: 10,
    total: 0
  },
  netProperties: [],
  tableLoading: false,
  deleteCfLoading: false,
  addDemandLoding: false,
  addStep: 0,
  addNetLoaiding: false
})

export default collectionDemand
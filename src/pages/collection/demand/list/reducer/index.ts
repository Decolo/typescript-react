import { handleActions } from 'redux-actions' 
import { 
  REQUEST_DEMAND_LIST,
  RECEIVE_DEMAND_LIST,
  CHANGE_DEMAND_NETSTATION,
  TOGGLE_DEMAND_UPDATE_MD,
  TOGGLE_DEMAND_DELETE_MD
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
  deleteId: number | null
}

const collectionDemand = handleActions({
  [REQUEST_DEMAND_LIST]: (state: any) => ({
    ...state,
    loading: true
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
  tableLoading: false,
  deleteCfLoading: false
})

export default collectionDemand
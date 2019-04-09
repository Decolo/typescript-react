import { handleActions } from 'redux-actions'
import { 
  REQUEST_USER_INFO, 
  RECEIVE_USER_INFO,
  TOGGLE_USER_INFO_UPDATE_MD,
  TOGGLE_USER_INFO_DELETE_MD,
  REQUEST_DELETE_USER,
  FINISH_DELETE_USER,
  REQUEST_EDIT_USER,
  FINISH_EDIT_USER
} from 'action/index'
import { Action } from 'declaration/index'

const userInfo = handleActions({
  [REQUEST_USER_INFO]: (state: any) => {
    return {
      ...state,
      tableLoading: true
    }
  },
  [RECEIVE_USER_INFO]: (state: any, action: Action) => {
    const { result, summary } = action.payload
    const { page, size, total } = summary
    return {
      ...state,
      userList: result,
      pagination: {
        current: page,
        pageSize: size,
        total
      },
      tableLoading: false
    } 
  },
  [TOGGLE_USER_INFO_UPDATE_MD]: (state: any, action: Action) => ({
    ...state,
    record: action.payload,
    updateMdVisible: !state.updateMdVisible
  }),
  [REQUEST_EDIT_USER]: (state: any) => ({
    ...state,
    updateCfLoading: true
  }),
  [FINISH_EDIT_USER]: (state: any) => ({
    ...state,
    updateCfLoading: false
  }),
  [TOGGLE_USER_INFO_DELETE_MD]: (state: any, action: Action) => ({
    ...state,
    deleteMdVisible: !state.deleteMdVisible,
    deleteIds: action.payload
  }),
  [REQUEST_DELETE_USER]: (state: any) => ({
    ...state,
    deleteCfLoading: true
  }),
  [FINISH_DELETE_USER]: (state: any) => ({
    ...state,
    deleteCfLoading: false
  })
}, {
  updateCfLoading: false,
  updateMdVisible: false,
  record: {},
  deleteMdVisible: false,
  deleteCfLoading: false,
  deleteIds: null,
  userList: [],
  pagination: {
    current: 1,
    pageSize: 10,
    total: 0
  },
  tableLoading: false
})

export default userInfo
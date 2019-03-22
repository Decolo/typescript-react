import { handleActions } from 'redux-actions'
import { 
  REQUEST_USER_INFO, 
  RECEIVE_USER_INFO,
  TOGGLE_USER_INFO_UPDATE_MD,
  TOGGLE_USER_INFO_DELETE_MD
} from '../../../../action'
import { Action } from '../../../../declartion'

const userInfo = handleActions({
  [REQUEST_USER_INFO]: (state: any) => ({
    ...state,
    isLoading: true
  }),
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
      isLoading: false
    } 
  },
  [TOGGLE_USER_INFO_UPDATE_MD]: (state: any, action: Action) => ({
    ...state,
    record: action.payload,
    updateMdVisible: !state.updateMdVisible
  }),
  [TOGGLE_USER_INFO_DELETE_MD]: (state: any, action: Action) => ({
    ...state,
    deleteMdVisible: !state.deleteMdVisible,
    deleteId: action.payload
  })
}, {
  updateMdVisible: false,
  record: {},
  deleteMdVisible: false,
  deleteCfLoading: false,
  deleteId: null,
  userList: [],
  pagination: {
    current: 1,
    pageSize: 10,
    total: 0
  },
  isLoading: false
})

export default userInfo
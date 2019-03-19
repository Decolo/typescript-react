import { handleActions } from 'redux-actions'
import { REQUEST_USER_INFO } from '../../../../action'

const userInfo = handleActions({
  [REQUEST_USER_INFO]: (state: any) => ({
    ...state,
    isLoading: true
  })
}, {
  userList: [],
  pagination: {
    current: 1,
    pageSize: 10,
    total: 0
  },
  isLoading: false
})

export default userInfo
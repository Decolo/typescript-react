import * as React from 'react'
import { connect } from 'react-redux'
import { ContainerProps } from '../../../../declartion'
import { doRequestUserInfo } from '../../../../action'
import Component from '../components'

export interface State {
  userList: Array<any>,
  pagination: {
    current: number,
    pageSize: number,
    total: number
  },
  updateMdVisible: boolean,
  record: {},
  isLoading: boolean
}

interface Props extends ContainerProps {}

class Container extends React.Component<Props, {}> {
  componentDidMount() {
    this.fetchUserList()
  }
  fetchUserList() {
    const { dispatch } = this.props
    dispatch(doRequestUserInfo())
    // dispatch(doFetchUserInfo())
  }
  render() {
    return(
      <Component/>
    )
  }
}


export default connect()(Container)


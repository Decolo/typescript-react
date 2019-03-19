import * as React from 'react'
import { connect } from 'react-redux'
import { ContainerProps } from '../../../../declartion'
import { doRequestUserInfo, doFetchUserInfo } from '../../../../action'
import Component from '../components'


class Container extends React.Component<ContainerProps, {}> {
  componentDidMount() {
    this.fetchUserList()
  }
  fetchUserList() {
    const { dispatch } = this.props
    dispatch(doRequestUserInfo())
    dispatch(doFetchUserInfo())
  }
  render() {
    return(
      <Component />
    )
  }
}

export default connect()(Container)


import * as React from 'react'
import { connect } from 'react-redux'
import { ContainerProps } from '../../../../declartion'
import { doRequestUserInfo } from '../../../../action'
import { configList } from '../config'
import MainLayout from '../../../../components/mainLayout'
import SearchBox from '../../../../components/searchBox'
import UpdateModal from './updateModal'
import Table from './table'

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
    const options = configList.filter(config => config.isSearchOption)
    return(
      <MainLayout>
        <div className="row bar">
          <UpdateModal/>
          <SearchBox
            options={options}
          />
        </div>
        <div className="row main">
          <Table/>
        </div>
      </MainLayout>
    )
  }
}


export default connect()(Container)

